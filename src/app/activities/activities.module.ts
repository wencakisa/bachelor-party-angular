import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
