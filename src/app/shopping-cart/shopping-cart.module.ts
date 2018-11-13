import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './shopping-cart.component';
import { AddToCartButtonComponent } from './shared/add-to-cart-button.component';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    AddToCartButtonComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  exports: [
    ShoppingCartComponent,
    AddToCartButtonComponent
  ]
})
export class ShoppingCartModule { }
