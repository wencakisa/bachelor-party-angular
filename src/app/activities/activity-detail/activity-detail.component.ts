import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { Price } from '../shared/price.model';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  @Input() activity: Activity;
  selectedPrice: Price;

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
      .subscribe(activity => {
        this.activity = activity;

        if (this.activity.prices) {
          this.onSelectionChange(this.activity.prices[0])
        }
      });
  }

  onSelectionChange(price: Price): void {
    this.selectedPrice = Object.assign({}, this.selectedPrice, price);
  }
}
