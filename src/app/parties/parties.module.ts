import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyListComponent } from './party-list/party-list.component';
import { PartyRoutingModule } from './party-routing.module';

@NgModule({
  declarations: [PartyListComponent],
  imports: [
    CommonModule,
    PartyRoutingModule
  ]
})
export class PartiesModule { }
