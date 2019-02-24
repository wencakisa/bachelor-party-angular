import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartyListComponent } from './party-list/party-list.component';
import { PartyDetailComponent } from './party-detail/party-detail.component';

const partyRoutes: Routes = [
  { path: 'parties', component: PartyListComponent },
  { path: 'parties/:id', component: PartyDetailComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(partyRoutes) ],
  exports: [ RouterModule ]
})
export class PartyRoutingModule { }
