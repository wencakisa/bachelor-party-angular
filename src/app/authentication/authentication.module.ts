import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AngularTokenModule } from 'angular-token';

import { AppSettings } from '../app.settings';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
  	LoginComponent,
  	RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    AngularTokenModule.forRoot({
      apiBase: AppSettings.API_BASE,
      signOutFailedValidate: true
    })
  ],
  providers: [
    AngularTokenModule,
    AuthenticationService
  ]
})
export class AuthenticationModule { }
