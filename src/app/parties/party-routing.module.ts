import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAuthGuard } from '../admin/guards/admin-auth.guard';
import { PartyListComponent } from './party-list/party-list.component';

const partyRoutes: Routes = [
  { path: 'parties', component: PartyListComponent, canActivate: [AdminAuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forChild(partyRoutes) ],
  exports: [ RouterModule ]
})
export class PartyRoutingModule { }
