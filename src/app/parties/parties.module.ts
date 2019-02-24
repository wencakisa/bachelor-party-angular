import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IfInRoleModule } from '../shared/if-in-role.module';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyRoutingModule } from './party-routing.module';
import { PartyDetailComponent } from './party-detail/party-detail.component';

@NgModule({
  declarations: [PartyListComponent, PartyDetailComponent],
  imports: [
    CommonModule,
    PartyRoutingModule,
    IfInRoleModule,
  ]
})
export class PartiesModule { }
