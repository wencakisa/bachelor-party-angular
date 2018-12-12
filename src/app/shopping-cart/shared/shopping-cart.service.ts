import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppSettings } from '../../app.settings';

import { ActivityInCart } from '../../activities/shared/activityInCart.model';
import { Activity } from '../../activities/shared/activity.model';
import { GroupSizeModalComponent } from '../group-size/group-size-modal/group-size-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private activitiesInCartSubject: BehaviorSubject<ActivityInCart[]> = new BehaviorSubject(
    AppSettings.getActivitiesFromLocalStorage()
  );
  private activitiesInCart: ActivityInCart[] = [];

  constructor(private modalService: NgbModal) {
    this.activitiesInCartSubject
      .subscribe(activities => this.activitiesInCart = activities);
  }

  modifyCart(activity: ActivityInCart): void {
    if (this.activityIsInCart(activity)) {
      this.removeActivity(activity);
    } else {
      this.addActivity(activity);
    }

    this.activitiesInCartSubject.next(this.activitiesInCart);
    this.updateLocalStorageActivities();
  }

  emptyCart(): void {
    for (let i = this.activitiesInCart.length - 1; i >= 0; --i) {
      this.removeActivity(this.activitiesInCart[i]);
    }
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
    if (this.isEmpty()) {
      this.modalService.open(GroupSizeModalComponent)
        .result
        .then(_ => {
          this.addActivityAndUpdateLocalStorage(activity);
        });
    } else {
      this.addActivityAndUpdateLocalStorage(activity);
    }
  }

  private addActivityAndUpdateLocalStorage(activity: ActivityInCart): void {
    this.activitiesInCart.push(activity);
    this.updateLocalStorageActivities();
  }

  private removeActivity(activity: ActivityInCart): void {
    this.activitiesInCart.splice(this.activitiesInCart.indexOf(activity), 1);

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
