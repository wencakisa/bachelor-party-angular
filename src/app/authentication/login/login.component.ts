import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppSettings } from '../../app.settings';
import { AuthenticationService } from '../shared/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService) { }

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
          this.toastr.success(`You have logged in successfully! :)`)
          
          AppSettings.USER_ROLES
            .get(this.authService.getCurrentUserRole())
            .redirectToRoute(this.router);  
        }
      },
      err => {
        this.toastr.error(err.error.errors[0])
      }
    )
  }
}
