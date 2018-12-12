import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ShoppingCartService } from '../shopping-cart.service';

import { Activity } from '../../../activities/shared/activity.model';
import { ActivityInCart } from '../../../activities/shared/activityInCart.model';
import { Price } from '../../../activities/shared/price.model';

import { GroupSizeComponent } from '../../group-size/group-size.component';

@Component({
  selector: 'app-modify-cart-button',
  templateUrl: './modify-cart-button.component.html',
  styleUrls: ['./modify-cart-button.component.css']
})
export class ModifyCartButtonComponent implements OnInit {

  @Input() activity: Activity;
  @Input() selectedPrice: Price;

  activityInCart: ActivityInCart;
  groupSizeDialogRef: MatDialogRef<GroupSizeComponent>;

  constructor(
    private cartService: ShoppingCartService,
    private groupSizeDialog: MatDialog) { }

  ngOnInit() {
    this.activityInCart = new ActivityInCart(this.activity);
  }

  modifyCart(): void {
    if (this.cartIsEmpty()) {
      this.groupSizeDialogRef = this.groupSizeDialog.open(GroupSizeComponent, {
        autoFocus: true,
        disableClose: true,
        width: '500px',
        height: '300px'
      });

      this.groupSizeDialogRef
        .afterClosed()
        .subscribe(() => {
          this.activityInCart.selectedPrice = this.selectedPrice;
          this.cartService.modifyCart(this.activityInCart);
        })
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
