import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

const activityRoutes: Routes = [
  { path: 'activities', component: ActivityListComponent },
  { path: 'activities/:id', component:  ActivityDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(activityRoutes) ],
  exports: [ RouterModule ]
})
export class ActivitiesRoutingModule { }
