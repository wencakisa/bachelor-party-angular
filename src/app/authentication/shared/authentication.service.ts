import { Injectable } from '@angular/core';
import { Response } from "@angular/http";

import { Subject, Observable, Subscription } from "rxjs";
import { map, finalize } from 'rxjs/operators';

import { AppSettings } from '../../app.settings';

import { AngularTokenService } from "angular-token";

@Injectable()
export class AuthenticationService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(public authTokenService: AngularTokenService) {
    if (this.authTokenService.userSignedIn()) {
      this.authTokenService.validateToken().subscribe(res => this.userSignedIn$.next(res));
    }
  }

  public getCurrentUserRole() {
    return AppSettings.getUserRoleFromLocalStorage();
  }

  logOutUser(): Observable<Response> {
    // localStorage.clear();
    // this.userSignedIn$.next(false);

    return this.authTokenService.signOut();
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
}
