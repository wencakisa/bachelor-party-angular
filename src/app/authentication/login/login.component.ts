import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from "../shared/authentication.service";

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

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  onSignInSubmit() {
    this.authService.logInUser(this.signInUser).subscribe(
      res => {
        if (res.ok) {
          this.router.navigate(['/admin']);
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
