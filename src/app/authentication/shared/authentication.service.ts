import { Injectable } from '@angular/core';
import { Response } from "@angular/http";

import { Subject, Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { AppSettings } from '../../app.settings';
import { Role } from './role';

import { AngularTokenService } from "angular-token";

@Injectable()
export class AuthenticationService {

  private currentUserRole: Role;
  userSignedIn$: Subject<boolean> = new Subject();

  constructor(public authTokenService: AngularTokenService) { // TODO do not execute, if a token is not presented
    this.authTokenService.validateToken().subscribe(
      res => res.ok ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    )
  }

  public getCurrentUserRole() {
    return this.currentUserRole;
  }

  logOutUser(): Observable<Response> {
    return this.authTokenService.signOut().pipe(
      map(
        res => {
          this.userSignedIn$.next(false);
          return res;
        }
      )
    );
  }

  logInUser(signInData: { login: string, password: string }): Observable<Response> {
    return this.authTokenService.signIn(signInData).pipe(
      map(
        res => {
          if (AppSettings.USER_ROLES.get(this.authTokenService.currentUserData['role'])) {
            this.currentUserRole = AppSettings.USER_ROLES.get(this.authTokenService.currentUserData['role']);
          }
          this.userSignedIn$.next(true);
          return res;
        }
      )
    );
  }
}
