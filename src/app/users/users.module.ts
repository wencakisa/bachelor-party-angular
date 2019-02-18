import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './shared/user.service';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
