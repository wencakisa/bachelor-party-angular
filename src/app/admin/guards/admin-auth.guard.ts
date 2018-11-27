import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AppSettings } from '../../app.settings';
import { AuthenticationService } from '../../authentication/shared/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (AppSettings.ROLE_ADMIN === this.authService.getCurrentUserRole()) {
    	return true;
    } else {
      alert("You shall not pass!");
    	this.router.navigate([AppSettings.HOME_PAGE_ROUTE]);
    	return false;
    }
  }
}
