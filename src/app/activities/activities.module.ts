import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';

import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivityService } from './shared/activity.service';
import { IfInRoleModule } from '../shared/if-in-role.module';

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityCreateComponent,
    ActivityDetailComponent,    
    ActivityEditComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartModule,
    ActivitiesRoutingModule,
    ReactiveFormsModule,
    IfInRoleModule
  ],
  providers: [
    ActivityService
  ]
})
export class ActivitiesModule { }
