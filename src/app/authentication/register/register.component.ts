import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit() {
    if (!!this.tokenAuthService.userSignedIn()) {
      this.authService.logOutUser().subscribe()
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

}
