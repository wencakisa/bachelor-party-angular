import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularTokenService } from 'angular-token';

import { AppSettings } from '../../app.settings';

@Injectable()
export class AuthenticationService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(public authTokenService: AngularTokenService) {
    this.authTokenService.validateToken().subscribe(
      res => this.userSignedIn$.next(res),
      err => localStorage.clear()
    );
  }

  public getCurrentUserRole() {
    return AppSettings.getUserRoleFromLocalStorage();
  }

  logInUser(signInData: { login: string, password: string }): Observable<Response> {
    return this.authTokenService.signIn(signInData).pipe(
      map(
        res => {
          let role = AppSettings.USER_ROLES.get(this.authTokenService.currentUserData['role']);

          if (role) {
            AppSettings.setUserRoleInLocalStorage(role.getName());
          }

          this.userSignedIn$.next(true);
          return res;
        }
      )
    );
  }

  logOutUser(): Observable<Response> {
    return this.authTokenService.signOut().pipe(
      map(res => {
        localStorage.removeItem(AppSettings.USER_ROLE_LS_KEY);
        this.userSignedIn$.next(false);
        return res;
      })
    );
  }
}
