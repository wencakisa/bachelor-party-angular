import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Party } from '../shared/party.model';
import { PartyService } from '../shared/party.service';
import { User } from 'src/app/users/shared/user.model';
import { UserService } from 'src/app/users/shared/user.service';
import { AuthenticationService } from 'src/app/authentication/shared/authentication.service';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {

  public parties: Party[];
  public partyAssignmentForm: FormGroup;
  public guides: User[];

  public displayPartyAssignmentForm: boolean = false;
  public partyAssignmentFormButtonName: string = 'Assign to guide';

  constructor(private partyService: PartyService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.getParties();

    if (AppSettings.ROLE_ADMIN === this.authenticationService.getCurrentUserRole()) {
      this.getGuides();

      this.partyAssignmentForm = this.formBuilder.group({
        guide: ['', [Validators.required]]
      });

      //this.partyAssignmentForm.controls['guide'].setValue(this.guides[0].email);
    }
  }

  getParties(): void {
    this.partyService.getParties()
      .subscribe(parties => this.parties = parties);
  }

  getGuides(): void {
    this.userService.getGuideUsers()
      .subscribe(guides => this.guides = guides);
  }

  setDisplayAssignmentForm() {
    this.displayPartyAssignmentForm = !this.displayPartyAssignmentForm;

    if (this.displayPartyAssignmentForm) {
      this.partyAssignmentFormButtonName = 'Hide';
    } else {
      this.partyAssignmentFormButtonName = 'Assign to guide';
    }
  }

  assignPartyToGuide(partyId: number) {
    let guideId = this.partyAssignmentForm.get('guide').value;
    if (confirm(`Are you sure you want to assign this party to this guide?`)) {
      this.partyService.assignPartyToGuide(partyId, guideId)
      .subscribe(data => {
          this.getParties();
        },
        error => {
          alert(error);
        }
      );
    }
  }

  unAssignPartyFromGuide(partyId: number, guideId: number) {
    if (confirm(`Are you sure you want to unassign this party from its guide?`)) {
      this.partyService.unAssignPartyFromGuide(partyId, guideId)
      .subscribe(data => {
          this.getParties();
        },
        error => {
          alert(error);
        }
      );
    }
  }
}
