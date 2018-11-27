import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminAuthGuard } from './guards/admin-auth.guard';

@NgModule({
  declarations: [
	AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
  	AdminAuthGuard
  ]
})
export class AdminModule { }
