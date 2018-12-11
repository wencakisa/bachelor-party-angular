import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppSettings } from '../app.settings';

import { ShoppingCartService } from './shared/shopping-cart.service';
import { ActivityInCart } from '../activities/shared/activityInCart.model';
import { QuotationService } from '../quotations/shared/quotation.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartActivities$: Observable<ActivityInCart[]>;
  shoppingCartActivities: ActivityInCart[];

  quotationFormVisible: boolean = false;

  constructor(
    private cartService: ShoppingCartService,
    private quotationService: QuotationService) { }

  ngOnInit() {
    this.shoppingCartActivities$ = this.cartService.getActivities();
    this.shoppingCartActivities$.subscribe(activities => this.shoppingCartActivities = activities)
  }

  emptyCart(): void {
    if(confirm('All activities in your cart will be discarded, are you sure?')) {
      this.cartService.emptyCart();
    }
  }

  canRequestQuotation(): boolean {
    return this.quotationService.canRequestQuotation();
  }

  toggleQuotationForm(): void {
    this.quotationFormVisible = !this.quotationFormVisible;
  }

  getCartSize(): number {
    return this.cartService.getCartSize();
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty();
  }

  getGroupSize(): number {
    return this.cartService.getGroupSize();
  }

  getTotalDuration(): number {
    return this.cartService.getTotalDuration();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  modifyCart(activity: ActivityInCart): void {
    this.cartService.modifyCart(activity);
  }

  getQuotationSentFromEmail(): string {
    return AppSettings.getQuotationSentFromEmailFromLocalStorage();
  }
}
