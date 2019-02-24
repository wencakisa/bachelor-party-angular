import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IfInRoleModule } from '../shared/if-in-role.module';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyRoutingModule } from './party-routing.module';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { InvitesModule } from '../invites/invites.module';
import { InviteFormComponent } from '../invites/shared/invite-form/invite-form.component';

@NgModule({
  declarations: [PartyListComponent, PartyDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PartyRoutingModule,
    InvitesModule,
    IfInRoleModule,
  ],
  entryComponents: [
    InviteFormComponent
  ]
})
export class PartiesModule { }
