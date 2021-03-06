import { HttpHeaders } from '@angular/common/http';

import { ActivityInCart } from './activities/shared/activityInCart.model';
import { RoleFactory } from './authentication/shared/role-factory';
import { Price } from './activities/shared/price.model';

export class AppSettings {
  public static API_BASE = 'http://localhost:3000';

  public static ROLE_ADMIN = 'admin';
  public static ROLE_GUIDE = 'guide';
  public static ROLE_CUSTOMER = 'customer';

  public static HOME_PAGE_ROUTE = '/';
  public static LOGIN_PAGE_ROUTE = '/login';

  public static ADMIN_AFTER_LOGIN_ROUTE = '/admin';
  public static GUIDE_AFTER_LOGIN_ROUTE = '/parties';

  public static USER_ROLES = new Map()
  									.set(AppSettings.ROLE_ADMIN, RoleFactory.createRole(AppSettings.ROLE_ADMIN, AppSettings.ADMIN_AFTER_LOGIN_ROUTE))
  									.set(AppSettings.ROLE_GUIDE, RoleFactory.createRole(AppSettings.ROLE_GUIDE, AppSettings.GUIDE_AFTER_LOGIN_ROUTE))
  									.set(AppSettings.ROLE_CUSTOMER, RoleFactory.createRole(AppSettings.ROLE_CUSTOMER, AppSettings.HOME_PAGE_ROUTE));

  public static USER_ROLE_LS_KEY = 'userRole';
  public static ACTIVITIES_IN_CART_LS_KEY = 'activitiesInCart';
  public static GROUP_SIZE_LS_KEY = 'groupSize';
  public static QUOTATION_SENT_FROM_EMAIL_LS_KEY = 'quotationSentFromEmail';
  public static PRICES_MARKED_FOR_DESTROYING_LS_KEY = 'pricesMarkedForDestroying';

  public static DEFAULT_HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public static getUserRoleFromLocalStorage(): string {
    return localStorage.getItem(AppSettings.USER_ROLE_LS_KEY);
  }

  public static setUserRoleInLocalStorage(role: string): void {
    localStorage.setItem(AppSettings.USER_ROLE_LS_KEY, role);
  }

  public static getActivitiesFromLocalStorage(): ActivityInCart[] {
    return JSON.parse(localStorage.getItem(AppSettings.ACTIVITIES_IN_CART_LS_KEY)) || [];
  }

  public static setActivitiesInLocalStorage(activities: ActivityInCart[]): void {
    localStorage.setItem(AppSettings.ACTIVITIES_IN_CART_LS_KEY, JSON.stringify(activities));
  }

  public static getGroupSizeFromLocalStorage(): number {
    return +localStorage.getItem(AppSettings.GROUP_SIZE_LS_KEY);
  }

  public static setGroupSizeInLocalStorage(groupSize: number): void {
    localStorage.setItem(AppSettings.GROUP_SIZE_LS_KEY, groupSize.toString());
  }

  public static getQuotationSentFromEmailFromLocalStorage(): string {
    return localStorage.getItem(AppSettings.QUOTATION_SENT_FROM_EMAIL_LS_KEY);
  }

  public static setQuotationSentFromEmailInLocalStorage(email: string): void {
    localStorage.setItem(AppSettings.QUOTATION_SENT_FROM_EMAIL_LS_KEY, email);
  }

  public static getPricesMarkedForDestroyingFromLocalStorage(): Price[] {
    return JSON.parse(localStorage.getItem(AppSettings.PRICES_MARKED_FOR_DESTROYING_LS_KEY));
  }

  public static setPricesMarkedForDestroyingFromLocalStorage(prices: Price[]): void {
    localStorage.setItem(AppSettings.PRICES_MARKED_FOR_DESTROYING_LS_KEY, JSON.stringify(prices));
  }
}
