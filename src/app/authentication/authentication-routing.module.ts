import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(authenticationRoutes) ],
  exports: [ RouterModule ]
})
export class AuthenticationRoutingModule { }
