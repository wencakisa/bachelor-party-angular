import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Party } from 'src/app/parties/shared/party.model';
import { Invite } from '../invite.model';
import { InviteService } from '../invite.service';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css']
})
export class InviteFormComponent implements OnInit {
  
  @Input() party: Party;

  inviteForm = new FormGroup({
    participantEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(private inviteService: InviteService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const invite = this.prepareSave();

    this.inviteService.invite(invite);
    this.inviteForm.disable();
  }

  private prepareSave(): Invite {
    let invite_params = {
      email: this.inviteForm.value.participantEmail,
      invitable_id: this.party.id
    }

    return new Invite().deserialize(invite_params)
  }
}
