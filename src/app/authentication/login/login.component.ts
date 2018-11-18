import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from "../shared/authentication.service";
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInUser = {
    login: '',
    password: ''
  };

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  onSignInSubmit() {
    this.authService.logInUser(this.signInUser).subscribe(
      res => {
        if (res.ok) {
          AppSettings.USER_ROLES
            .get(this.authService.getCurrentUserRole())
            .redirectToRoute(this.router);
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
