import { Component, OnInit } from '@angular/core';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[];

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }

  editActivity(activity: Activity) {
    this.router.navigate([`/activities/${activity.id}/edit`]);
  }

  deleteActivity(activity: Activity) {
    if (confirm("Are you sure you want to delete this activity?")) {
      this.activityService.deleteActivity(activity.id)
        .subscribe(activities => this.activities = this.activities.filter(a => a !== activity));
    }
  }
}
