import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularTokenService } from 'angular-token';

import { Party } from '../shared/party.model';
import { PartyService } from '../shared/party.service';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css']
})
export class PartyDetailComponent implements OnInit {

  @Input() party: Party;

  inviteFormVisible: boolean;

  constructor(
    private route: ActivatedRoute,
    private partyService: PartyService,
    private authTokenService: AngularTokenService
  ) { }

  ngOnInit() {
    this.getParty();
  }

  getParty(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.partyService.getParty(id)
      .subscribe(party => {
        this.party = party;
      })
  }

  currentUserIsPartyHost(): boolean {
    return this.authTokenService.currentAuthData.uid === this.party.host.email;
  }

  toggleInviteForm(): void {
    this.inviteFormVisible = !this.inviteFormVisible;
  }

}
