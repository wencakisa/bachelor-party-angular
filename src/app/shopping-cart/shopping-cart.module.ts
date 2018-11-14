import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ModifyCartButtonComponent } from './shared/modify-cart-button.component';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ModifyCartButtonComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  exports: [
    ShoppingCartComponent,
    ModifyCartButtonComponent
  ]
})
export class ShoppingCartModule { }
