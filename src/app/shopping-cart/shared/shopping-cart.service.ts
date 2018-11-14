import { Injectable } from '@angular/core';

import { Activity } from '../../activities/shared/activity.model';
import { BehaviorSubject, Observable } from 'rxjs';

const ACTIVITIES_IN_CART_LS_KEY = 'activitiesInCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private activitiesInCartSubject: BehaviorSubject<Activity[]> = new BehaviorSubject(this.getActivitiesFromLocalStorage());
  private activitiesInCart: Activity[] = [];

  constructor() {
    this.activitiesInCartSubject
      .subscribe(activities => this.activitiesInCart = activities);
  }

  modifyCart(activity: Activity): void {
    if (this.activityIsInCart(activity)) {
      this.activitiesInCart.splice(this.activitiesInCart.indexOf(activity), 1);
    } else {
      this.activitiesInCart.push(activity);
    }

    this.activitiesInCartSubject.next(this.activitiesInCart);
    this.updateLocalStorageActivities();
  }

  // addToCart(activity: Activity): void {
  //   this.modifyCart(activity);
  // }

  // removeFromCart(activity: Activity): void {
  //   this.modifyCart(activity);
  // }

  getActivities(): Observable<Activity[]> {
    return this.activitiesInCartSubject;
  }

  getCartSize(): number {
    return this.activitiesInCart.length;
  }

  activityIsInCart(activity: Activity): boolean {
    return this.activitiesInCart.includes(activity);
  }

  private getActivitiesFromLocalStorage(): Activity[] {
    return JSON.parse(localStorage.getItem(ACTIVITIES_IN_CART_LS_KEY)) || [];
  }

  private updateLocalStorageActivities(): void {
    localStorage.setItem(ACTIVITIES_IN_CART_LS_KEY, JSON.stringify(this.activitiesInCart));
  }
}
