import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from './login/login.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AngularTokenModule } from 'angular-token';

import { AppSettings } from '../app.settings';

import { AuthenticationService } from "./shared/authentication.service";

@NgModule({
  declarations: [
  	LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    AngularTokenModule.forRoot({
      apiBase: AppSettings.API_BASE
    })
  ],
  providers: [ AuthenticationService ]
})
export class AuthenticationModule { }
