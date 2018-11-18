import { HttpHeaders } from '@angular/common/http';

import { Activity } from './activities/shared/activity.model';

export class AppSettings {
  public static API_BASE = 'http://localhost:3000';

  public static ACTIVITIES_IN_CART_LS_KEY = 'activitiesInCart';
  public static GROUP_SIZE_LS_KEY = 'groupSize';

  public static DEFAULT_HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public static getActivitiesFromLocalStorage(): Activity[] {
    return JSON.parse(localStorage.getItem(AppSettings.ACTIVITIES_IN_CART_LS_KEY)) || [];
  }

  public static setActivitiesInLocalStorage(activities: Activity[]): void {
    localStorage.setItem(AppSettings.ACTIVITIES_IN_CART_LS_KEY, JSON.stringify(activities));
  }

  public static getGroupSizeFromLocalStorage(): number {
    return +localStorage.getItem(AppSettings.GROUP_SIZE_LS_KEY);
  }

  public static setGroupSizeInLocalStorage(groupSize: number): void {
    localStorage.setItem(AppSettings.GROUP_SIZE_LS_KEY, groupSize.toString());
  }

}
