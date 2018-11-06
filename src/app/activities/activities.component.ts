import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activity: Activity = {
    id: 1,
    title: 'Karting',
    subtitle: 'Kart race in the centre of Sofia',
    details: 'Lorem ipsum',
    transfer_provided: true,
    guide_provided: false,
    image_url: null
  };

  constructor() { }

  ngOnInit() {
  }

}
