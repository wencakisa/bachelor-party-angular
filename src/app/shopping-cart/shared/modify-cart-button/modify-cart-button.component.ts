import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartService } from '../shopping-cart.service';

import { Activity } from '../../../activities/shared/activity.model';
import { ActivityInCart } from '../../../activities/shared/activityInCart.model';
import { Price } from '../../../activities/shared/price.model';
import { GroupSizeModalComponent } from '../../group-size-modal/group-size-modal.component';

@Component({
  selector: 'app-modify-cart-button',
  templateUrl: './modify-cart-button.component.html',
  styleUrls: ['./modify-cart-button.component.css']
})
export class ModifyCartButtonComponent implements OnInit {

  @Input() activity: Activity;
  @Input() selectedPrice: Price;
  activityInCart: ActivityInCart;

  constructor(
    private cartService: ShoppingCartService,
    private activeModal: NgbModal
  ) { }

  ngOnInit() {
    this.activityInCart = new ActivityInCart(this.activity);
  }

  modifyCart(): void {
    if (this.cartIsEmpty()) {
      const modalRef = this.activeModal.open(
        GroupSizeModalComponent,
        GroupSizeModalComponent.modalOptions
      );

      modalRef.result.then(_ => this.setSelctedPriceAndModifyCart());
    } else {
      this.setSelctedPriceAndModifyCart();
    }
  }

  activityIsInCart(): boolean {
    return this.cartService.activityIsInCart(this.activityInCart);
  }

  cartIsEmpty(): boolean {
    return this.cartService.isEmpty();
  }

  private setSelctedPriceAndModifyCart(): void {
    this.activityInCart.selectedPrice = this.selectedPrice;
    this.cartService.modifyCart(this.activityInCart);
  }

}
