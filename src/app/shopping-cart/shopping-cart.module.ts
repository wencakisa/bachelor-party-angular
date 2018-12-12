import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { QuotationsModule } from '../quotations/quotations.module';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ModifyCartButtonComponent } from './shared/modify-cart-button/modify-cart-button.component';
import { RequestQuotationComponent } from '../quotations/request-quotation/request-quotation.component';
import { GroupSizeModalComponent } from './group-size-modal/group-size-modal.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ModifyCartButtonComponent,
    GroupSizeModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingCartRoutingModule,
    QuotationsModule
  ],
  exports: [
    ShoppingCartComponent,
    ModifyCartButtonComponent
  ],
  entryComponents: [
    RequestQuotationComponent,
    GroupSizeModalComponent
  ]
})
export class ShoppingCartModule { }
