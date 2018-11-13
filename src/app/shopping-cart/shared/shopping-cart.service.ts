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

  addToCart(activity: Activity): void {
    if (this.canAddActivity(activity)) {
      this.activitiesInCart.push(activity);
      this.activitiesInCartSubject.next(this.activitiesInCart);

      this.updateLocalStorageActivities();
    } else {
      console.log(`Activity '${activity.title}' is already in your cart!`);
    }
  }

  getActivities(): Observable<Activity[]> {
    return this.activitiesInCartSubject;
  }

  getCartSize(): number {
    return this.activitiesInCart.length;
  }

  canAddActivity(activity: Activity) {
    return !this.activitiesInCart
      .find(activityInCart => activityInCart.id === activity.id)
  }

  private getActivitiesFromLocalStorage(): Activity[] {
    return JSON.parse(localStorage.getItem(ACTIVITIES_IN_CART_LS_KEY)) || [];
  }

  private updateLocalStorageActivities(): void {
    localStorage.setItem(ACTIVITIES_IN_CART_LS_KEY, JSON.stringify(this.activitiesInCart));
  }
}
