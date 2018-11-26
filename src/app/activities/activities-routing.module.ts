import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { AdminAuthGuard } from '../admin/guards/admin-auth.guard';

const activityRoutes: Routes = [
  { path: 'activities', component: ActivityListComponent },
  { path: 'activity/new', component:  ActivityCreateComponent, canActivate: [AdminAuthGuard] },
  { path: 'activities/:id', component:  ActivityDetailComponent },
  { path: 'activities/:id/edit', component:  ActivityEditComponent, canActivate: [AdminAuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forChild(activityRoutes) ],
  exports: [ RouterModule ]
})
export class ActivitiesRoutingModule { }
