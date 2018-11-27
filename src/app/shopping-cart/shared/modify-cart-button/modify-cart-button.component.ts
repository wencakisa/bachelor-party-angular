import { Component, OnInit, Input } from '@angular/core';

import { Activity } from '../../../activities/shared/activity.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-modify-cart-button',
  templateUrl: './modify-cart-button.component.html',
  styleUrls: ['./modify-cart-button.component.css']
})
export class ModifyCartButtonComponent implements OnInit {

  @Input() activity: Activity;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  modifyCart(): void {
    this.cartService.modifyCart(this.activity);
  }

  activityIsInCart(): boolean {
    return this.cartService.activityIsInCart(this.activity);
  }

}
