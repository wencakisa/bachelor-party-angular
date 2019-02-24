import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Party } from '../shared/party.model';
import { PartyService } from '../shared/party.service';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css']
})
export class PartyDetailComponent implements OnInit {

  @Input() party: Party;

  constructor(
    private route: ActivatedRoute,
    private partyService: PartyService
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

}
