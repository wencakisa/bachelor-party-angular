import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteFormComponent } from './shared/invite-form/invite-form.component';
import { InviteService } from './shared/invite.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InviteFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InviteFormComponent
  ],
  providers: [
    InviteService
  ]
})
export class InvitesModule { }
