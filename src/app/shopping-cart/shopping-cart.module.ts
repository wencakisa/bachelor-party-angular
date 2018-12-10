import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

import { ShoppingCartComponent } from './shopping-cart.component';
import { GroupSizeModalComponent } from './group-size/group-size-modal.component';
import { ModifyCartButtonComponent } from './shared/modify-cart-button/modify-cart-button.component';
import { RequestQuotationComponent } from '../quotations/request-quotation/request-quotation.component';
import { QuotationsModule } from '../quotations/quotations.module';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    GroupSizeModalComponent,
    ModifyCartButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule,
    QuotationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ShoppingCartComponent,
    ModifyCartButtonComponent
  ],
  entryComponents: [
    GroupSizeModalComponent,
    RequestQuotationComponent
  ]
})
export class ShoppingCartModule { }
