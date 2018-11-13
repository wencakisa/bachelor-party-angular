import { Component, OnInit, Input } from '@angular/core';

import { Activity } from 'src/app/activities/shared/activity.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent implements OnInit {

  @Input() activity: Activity;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(): void {
    this.cartService.addToCart(this.activity);
  }

  canAddActivity(): boolean {
    return this.cartService.canAddActivity(this.activity);
  }

}
