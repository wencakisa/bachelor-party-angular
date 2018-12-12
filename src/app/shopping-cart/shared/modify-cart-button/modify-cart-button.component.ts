import { Component, OnInit, Input } from '@angular/core';

import { ShoppingCartService } from '../shopping-cart.service';

import { Activity } from '../../../activities/shared/activity.model';
import { ActivityInCart } from '../../../activities/shared/activityInCart.model';
import { Price } from '../../../activities/shared/price.model';

@Component({
  selector: 'app-modify-cart-button',
  templateUrl: './modify-cart-button.component.html',
  styleUrls: ['./modify-cart-button.component.css']
})
export class ModifyCartButtonComponent implements OnInit {

  @Input() activity: Activity;
  @Input() selectedPrice: Price;
  activityInCart: ActivityInCart;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.activityInCart = new ActivityInCart(this.activity);
  }

  modifyCart(): void {
    if (this.cartIsEmpty()) {
      console.log('group size')
    } else {
      this.activityInCart.selectedPrice = this.selectedPrice;
      this.cartService.modifyCart(this.activityInCart);
    }

  }

  activityIsInCart(): boolean {
    return this.cartService.activityIsInCart(this.activityInCart);
  }

  cartIsEmpty(): boolean {
    return this.cartService.isEmpty();
  }
}
