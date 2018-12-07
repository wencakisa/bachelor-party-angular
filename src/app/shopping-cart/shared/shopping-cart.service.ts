import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppSettings } from '../../app.settings';

import { ActivityInCart } from '../../activities/shared/activityInCart.model';
import { GroupSizeModalComponent } from '../group-size/modal/group-size-modal.component';

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
    return this.reduceToSum(this.activitiesInCart.map(a => a.price.amount));
  }

  activityIsInCart(activity: ActivityInCart): boolean {
    return this.activitiesInCart
      .find(activityInCart => activityInCart.id === activity.id) != null;
  }

  private addActivity(activity: ActivityInCart): void {
    // First product to be added, open modal for entering group size
    if (this.getCartSize() === 0) {
      this.modalService.open(GroupSizeModalComponent).result.then(_ => {
        this.activitiesInCart.push(activity);
        this.updateLocalStorageActivities();
      })
    } else {
      this.activitiesInCart.push(activity);
    }

  }

  private removeActivity(activity: ActivityInCart): void {
    this.activitiesInCart.splice(this.activitiesInCart.indexOf(activity), 1);

    // Remove groupSize from localStorage when the cart gets empty
    if (this.getCartSize() === 0) {
      localStorage.removeItem(AppSettings.ACTIVITIES_IN_CART_LS_KEY);
      localStorage.removeItem(AppSettings.GROUP_SIZE_LS_KEY);
    }
  }

  private updateLocalStorageActivities(): void {
    AppSettings.setActivitiesInLocalStorage(this.activitiesInCart);
  }

  private reduceToSum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0)
  }
}
