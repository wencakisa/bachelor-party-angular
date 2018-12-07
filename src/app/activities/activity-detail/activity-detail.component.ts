import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActivityService } from '../shared/activity.service';
import { Activity } from '../shared/activity.model';
import { ActivityInCart } from '../shared/activityInCart.model';
import { Price } from '../shared/price.model';

import { ShoppingCartService } from '../../shopping-cart/shared/shopping-cart.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  @Input() activity: Activity;
  selectedPrice: Price;
  activityFromCart: ActivityInCart;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getActivity();
  }

  getActivity(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.activityService.getActivity(id)
      .subscribe(activity => {
        this.activity = activity;
      }).add(() => {
        if (this.activity.prices) {
          // The first price is selected by default
          this.onSelectionChange(this.activity.prices[0])
        }

        if (this.activityIsInCart()) {
          this.activityFromCart = this.shoppingCartService.getActivityById(this.activity.id);
        }
      });
  }

  onSelectionChange(price: Price): void {
    this.selectedPrice = Object.assign({}, this.selectedPrice, price);
  }

  activityIsInCart(): boolean {
    return this.shoppingCartService.activityIsInCart(this.activity);
  }
}
