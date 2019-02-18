import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppSettings } from '../../app.settings';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSignInSubmit() {
    this.authService.logInUser(this.loginForm.value).subscribe(
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
