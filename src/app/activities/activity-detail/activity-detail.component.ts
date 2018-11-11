import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { ShoppingCartService } from 'src/app/shopping-cart/shared/shopping-cart.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private cartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getActivity();
  }

  getActivity(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.activityService.getActivity(id)
      .subscribe(activity => this.activity = activity);
  }

  addToCart(): void {
    this.cartService.addToCart(this.activity);
  }
}
