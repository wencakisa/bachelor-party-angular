import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularTokenService } from 'angular-token';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(
    private tokenAuthService: AngularTokenService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (!!this.tokenAuthService.userSignedIn()) {
      this.authService.logOutUser().subscribe()
    }

    if (this.getInvitationToken()) {
      let invitationTokenObj = {
        invitation_token: this.getInvitationToken()
      }

      Object.assign(this.signUpUser, invitationTokenObj)
    }
  }

  onSignUpSubmit() {
    this.tokenAuthService.registerAccount(this.signUpUser)
      .subscribe(
        (res) => {
          if (res.status == 'success') {
            // TODO: Toast
            this.router.navigate(['/login'])
          }
        },
        (err) => {
          console.log('Error: ', err)
        }
      )
  }

  getInvitationToken(): string {
    return this.route.snapshot.queryParams['invitation_token']
  }

}
