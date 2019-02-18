import { Component, OnInit } from '@angular/core';

import { Party } from '../shared/party.model';
import { PartyService } from '../shared/party.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {

  parties: Party[]

  constructor(private partyService: PartyService) { }

  ngOnInit() {
    this.getParties()
  }

  getParties(): void {
    this.partyService.getParties()
      .subscribe(parties => this.parties = parties)
  }

}
