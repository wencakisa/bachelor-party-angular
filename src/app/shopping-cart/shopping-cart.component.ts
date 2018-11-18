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

  quotationFormVisible: boolean = false;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartActivities$ = this.cartService.getActivities();
    this.shoppingCartActivities$.subscribe(activities => this.shoppingCartActivities = activities)
  }

  emptyCart(): void {
    if(confirm('All activities in your cart will be discarded, are you sure?')) {
      this.cartService.emptyCart();
    }
  }

  toggleQuotationForm(): void {
    this.quotationFormVisible = !this.quotationFormVisible;
  }

  getCartSize(): number {
    return this.cartService.getCartSize();
  }

  getGroupSize(): number {
    return this.cartService.getGroupSize();
  }

  modifyCart(activity: Activity): void {
    this.cartService.modifyCart(activity);
  }
}
