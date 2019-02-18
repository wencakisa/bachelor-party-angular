import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(authenticationRoutes) ],
  exports: [ RouterModule ]
})
export class AuthenticationRoutingModule { }
