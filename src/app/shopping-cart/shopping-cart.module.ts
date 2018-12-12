import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { QuotationsModule } from '../quotations/quotations.module';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ModifyCartButtonComponent } from './shared/modify-cart-button/modify-cart-button.component';
import { RequestQuotationComponent } from '../quotations/request-quotation/request-quotation.component';
import { GroupSizeModalComponent } from './group-size/group-size-modal/group-size-modal.component';
import { GroupSizeFormComponent } from './group-size/group-size-form/group-size-form.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ModifyCartButtonComponent,
    GroupSizeModalComponent,
    GroupSizeFormComponent,
  ],
  imports: [
    CommonModule,
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
