import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[];
  filteredActivities: Activity[];

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => {
        this.activities = activities;
        this.assignCopy();
      });
  }

  filterActivitiesByTitle(title: string): void {
     this.filterActivities('title', title);
  }

  filterActivitiesByTimeType(timeType: string): void {
    if (timeType === 'all') {
      this.assignCopy();
      return;
    }

    this.filterActivities('time_type', timeType, true);
  }

  orderActivitiesByPrice(direction: string = 'asc'): void {
    this.filteredActivities.sort((a: Activity, b: Activity) => {
      let aPrice = a.getLowestPriceAmount();
      let bPrice = b.getLowestPriceAmount();

      return (direction === 'asc') ? aPrice - bPrice : bPrice - aPrice;
    });
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

  private assignCopy() {
    this.filteredActivities = Object.assign([], this.activities);
  }

  private filterActivities(field: string, searchTerm: string, strong: boolean = false): void {
    if (!searchTerm) {
      this.assignCopy();
    }

    this.filteredActivities = Object.assign([], this.activities)
      .filter(activity => {
        return (strong) ?
          activity[field] === searchTerm :
          activity[field].toLowerCase().indexOf(searchTerm.toLowerCase()) > - 1;
      })
  }
}
