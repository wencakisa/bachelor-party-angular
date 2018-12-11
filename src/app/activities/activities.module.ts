import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityCreateEditComponent } from './activity-create-edit/activity-create-edit.component';

import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivityService } from './shared/activity.service';
import { IfInRoleModule } from '../shared/if-in-role.module';

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityCreateEditComponent,
    ActivityDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
