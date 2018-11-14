import { Injectable } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Subject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Response } from "@angular/http";

@Injectable()
export class AuthenticationService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(public authTokenService: AngularTokenService) { // TODO do not execute if a token is not presented
    console.log("Is a user signed in? - " + this.authTokenService.currentUserData);
    if (this.authTokenService.userSignedIn()) {
      this.authTokenService.validateToken().subscribe(
        res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
      )
    }
  }

  userSignedIn() {
    return this.authTokenService.userSignedIn();
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
          this.userSignedIn$.next(true);
          return res
        }
      )
    );
  }
}
