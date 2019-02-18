import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AdminAuthGuard } from '../admin/guards/admin-auth.guard';
import { UserCreateComponent } from './user-create/user-create.component';

const userRoutes: Routes = [
  { path: 'users', component: UserListComponent, canActivate: [AdminAuthGuard] },
  { path: 'users/new', component: UserCreateComponent, canActivate: [AdminAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
