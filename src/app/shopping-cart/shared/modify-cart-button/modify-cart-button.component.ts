import { Component, OnInit, Input } from '@angular/core';

import { Activity } from '../../../activities/shared/activity.model';
import { ActivityInCart } from 'src/app/activities/shared/activityInCart.model';
import { ShoppingCartService } from '../shopping-cart.service';
import { Price } from 'src/app/activities/shared/price.model';

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
    this.activityInCart.setPrice(this.selectedPrice);
    this.cartService.modifyCart(this.activityInCart);
  }

  activityIsInCart(): boolean {
    return this.cartService.activityIsInCart(this.activityInCart);
  }

}
