import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { QuotationsModule } from '../quotations/quotations.module';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ModifyCartButtonComponent } from './shared/modify-cart-button/modify-cart-button.component';
import { RequestQuotationComponent } from '../quotations/request-quotation/request-quotation.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ModifyCartButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule,
    QuotationsModule
  ],
  exports: [
    ShoppingCartComponent,
    ModifyCartButtonComponent
  ],
  entryComponents: [
    RequestQuotationComponent
  ]
})
export class ShoppingCartModule { }
