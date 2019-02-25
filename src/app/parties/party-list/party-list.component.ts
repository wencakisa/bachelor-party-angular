import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Party } from '../shared/party.model';
import { PartyService } from '../shared/party.service';
import { User } from 'src/app/users/shared/user.model';
import { UserService } from 'src/app/users/shared/user.service';
import { AuthenticationService } from 'src/app/authentication/shared/authentication.service';
import { AppSettings } from 'src/app/app.settings';
import { GuideAssignmentButton } from '../shared/party-assignment-button';
import { ButtonFactory } from '../shared/button-factory';


@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {

  public parties: Party[];
  public guides: User[];

  public guideAssignmentForm: FormGroup;

  public guideAssignmentFormButtons = new Map();

  constructor(private partyService: PartyService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.getParties();

    if (AppSettings.ROLE_ADMIN === this.authenticationService.getCurrentUserRole()) {
      this.getGuides();

      this.guideAssignmentForm = this.formBuilder.group({
        guide: ['', [Validators.required]]
      });
    }
  }

  getParties(): void {
    this.partyService.getParties()
      .subscribe(parties => {
        this.parties = parties;
        parties.forEach(party => {
          this.guideAssignmentFormButtons.set(party.id, ButtonFactory.createGideAssignmentButton());
        })
      });
  }

  getGuides(): void {
    this.userService.getUsersByRole('guide')
      .subscribe(guides => this.guides = guides);
  }

  setDisplayGuideAssignmentForm(partyId: number) {
    this.setNewValueForCurrentButton(partyId);
    let currentButton = this.guideAssignmentFormButtons.get(partyId);

    if (currentButton.getValue()) {
      currentButton.setName('Hide');
    } else {
      currentButton.setName('Assign guide');
    }
  }

  assignGuideToParty(partyId: number) {
    let guideId = this.guideAssignmentForm.get('guide').value;
    if (confirm(`Are you sure you want to assign this guide to this party?`)) {
      this.partyService.assignGuideToParty(partyId, guideId)
      .subscribe(data => {
          this.getParties();
        },
        error => {
          alert(error);
        }
      );
    }
  }

  withdrawGuideFromParty(partyId: number, guideId: number) {
    if (confirm(`Are you sure you want to withdraw this guide from this party?`)) {
      this.partyService.withdrawGuideFromParty(partyId, guideId)
      .subscribe(data => {
          this.getParties();
        },
        error => {
          alert(error);
        }
      );
    }
  }

  private setNewValueForCurrentButton(partyId: number): void {
    let currentButton = this.guideAssignmentFormButtons.get(partyId);
    currentButton.setValue(!currentButton.getValue());
  }
}
