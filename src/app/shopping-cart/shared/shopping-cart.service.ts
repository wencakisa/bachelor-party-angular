import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AppSettings } from '../../app.settings';

import { ActivityInCart } from '../../activities/shared/activityInCart.model';
import { Activity } from '../../activities/shared/activity.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private activitiesInCartSubject: BehaviorSubject<ActivityInCart[]> = new BehaviorSubject(
    AppSettings.getActivitiesFromLocalStorage()
  );
  private activitiesInCart: ActivityInCart[] = [];

  constructor(private toastr: ToastrService) {
    this.activitiesInCartSubject
      .subscribe(activities => this.activitiesInCart = activities);
  }

  modifyCart(activity: ActivityInCart): void {
    let action = ''

    if (this.activityIsInCart(activity)) {
      this.removeActivity(activity);
      action = 'removed from'
    } else {
      this.addActivity(activity);
      action = 'added to'
    }

    this.toastr.info(`Activity successfully ${action} shopping cart.`)

    this.activitiesInCartSubject.next(this.activitiesInCart);
    this.updateLocalStorageActivities();
  }

  emptyCart(): void {
    for (let i = this.activitiesInCart.length - 1; i >= 0; --i) {
      this.removeActivity(this.activitiesInCart[i]);
    }

    this.toastr.info('Shopping cart emptied.')
  }

  getActivities(): Observable<ActivityInCart[]> {
    return this.activitiesInCartSubject;
  }

  getActivityById(id: number): ActivityInCart {
    return this.activitiesInCart
      .find(activityInCart => activityInCart.id === id);
  }

  getCartSize(): number {
    return this.activitiesInCart.length;
  }

  getGroupSize(): number {
    return AppSettings.getGroupSizeFromLocalStorage();
  }

  getTotalDuration(): number {
    return this.reduceToSum(this.activitiesInCart.map(a => a.duration));
  }

  getTotalPrice(): number {
    return this.reduceToSum(this.activitiesInCart.map(a => a.selectedPrice.amount));
  }

  activityIsInCart(activity: Activity): boolean {
    return this.getActivityById(activity.id) != null;
  }

  isEmpty(): boolean {
    return this.getCartSize() === 0;
  }

  hasSingleTimeTypeForAllActivities(): boolean {
    return this.activitiesInCart
      .slice(1, this.activitiesInCart.length)
      .every(activity => activity.time_type === this.firstActivityTimeType());
  }

  getOverallTimeType(): string {
    return this.hasSingleTimeTypeForAllActivities() ?
      this.firstActivityTimeType() : 'day & night';
  }

  private addActivity(activity: ActivityInCart): void {
    this.activitiesInCart.push(activity);
    this.updateLocalStorageActivities();
  }

  private removeActivity(activity: ActivityInCart): void {
    let activityIndex = this.activitiesInCart.map(activity => activity.id).indexOf(activity.id);
    this.activitiesInCart.splice(activityIndex, 1);

    // Remove groupSize from localStorage when the cart gets empty
    if (this.isEmpty()) {
      localStorage.removeItem(AppSettings.ACTIVITIES_IN_CART_LS_KEY);
      localStorage.removeItem(AppSettings.GROUP_SIZE_LS_KEY);
    }
  }

  private updateLocalStorageActivities(): void {
    AppSettings.setActivitiesInLocalStorage(this.activitiesInCart);
  }

  private firstActivityTimeType(): string {
    return this.activitiesInCart[0].time_type;
  }

  private reduceToSum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0)
  }
}
