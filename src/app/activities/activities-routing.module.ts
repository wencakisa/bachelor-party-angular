import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCreateEditComponent } from './activity-create-edit/activity-create-edit.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { AdminAuthGuard } from '../admin/guards/admin-auth.guard';

const activityRoutes: Routes = [
  { path: 'activities', component: ActivityListComponent },
  { path: 'activity/new', component:  ActivityCreateEditComponent, canActivate: [AdminAuthGuard] },
  { path: 'activities/:id', component:  ActivityDetailComponent },
  { path: 'activities/:id/edit', component:  ActivityCreateEditComponent, canActivate: [AdminAuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forChild(activityRoutes) ],
  exports: [ RouterModule ]
})
export class ActivitiesRoutingModule { }
