import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularTokenService } from "angular-token";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authTokenService: AngularTokenService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authTokenService.userSignedIn()) {
      let currentUserString = JSON.stringify(this.authTokenService.currentUserData);
      let currentUserJSON = JSON.parse(currentUserString);
      
    	return currentUserJSON.role === "admin";
    } else {
    	this.router.navigate(['/']);
    	return false;
    }

  }
}
