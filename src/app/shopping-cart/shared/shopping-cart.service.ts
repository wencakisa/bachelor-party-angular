import { Injectable } from '@angular/core';

import { Activity } from '../../activities/shared/activity.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private activitiesInCartSubject: BehaviorSubject<Activity[]> = new BehaviorSubject([]);
  private activitiesInCart: Activity[] = [];

  constructor() {
    this.activitiesInCartSubject
      .subscribe(activities => this.activitiesInCart = activities);
  }

  addToCart(activity: Activity): void {
    if (!this.activitiesInCart
          .find(activityInCart => activityInCart === activity)) {
      this.activitiesInCartSubject.next([...this.activitiesInCart, activity]);
    }

    console.log('You can not an activity more than once!');
  }

  getActivities(): Observable<Activity[]> {
    return this.activitiesInCartSubject;
  }
}
