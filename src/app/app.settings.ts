import { Role } from './authentication/shared/role';

export class AppSettings {
  public static API_BASE = 'http://localhost:3000';

  public static ROLE_ADMIN = "admin";
  public static ROLE_GUIDE = "guide";
  public static ROLE_CUSTOMER = "customer";

  public static HOME_PAGE_ROUTE = "/";
  public static LOGIN_PAGE_ROUTE = "/login";
  public static ADMIN_PANEL_ROUTE = "/admin";

  public static USER_ROLES = new Map()
  									.set(AppSettings.ROLE_ADMIN, new Role(AppSettings.ROLE_ADMIN, AppSettings.ADMIN_PANEL_ROUTE))
  									.set(AppSettings.ROLE_GUIDE, new Role(AppSettings.ROLE_GUIDE, AppSettings.HOME_PAGE_ROUTE))
  									.set(AppSettings.ROLE_CUSTOMER, new Role(AppSettings.ROLE_CUSTOMER, AppSettings.HOME_PAGE_ROUTE));

  public static ACTIVITIES_IN_CART_LS_KEY = 'activitiesInCart';
  public static GROUP_SIZE_LS_KEY = 'groupSize';
}
