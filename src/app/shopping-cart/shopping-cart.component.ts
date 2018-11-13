import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from '../activities/shared/activity.model';
import { ShoppingCartService } from './shared/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartActivities$: Observable<Activity[]>;
  shoppingCartActivities: Activity[];

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartActivities$ = this.cartService.getActivities();
    this.shoppingCartActivities$.subscribe(activities => this.shoppingCartActivities = activities)
  }
}
