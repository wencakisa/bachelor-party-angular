import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.getActivity();
  }

  getActivity(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.activityService.getActivity(id)
      .subscribe(activity => this.activity = activity);
  }

  getDefaultCurrency(): string {
    return AppSettings.DEFAULT_CURRENCY;
  }
}
