import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';

const adminRoutes: Routes = [
	{ path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
