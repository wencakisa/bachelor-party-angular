import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { QuotationsModule } from '../quotations/quotations.module';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ModifyCartButtonComponent } from './shared/modify-cart-button/modify-cart-button.component';
import { RequestQuotationComponent } from '../quotations/request-quotation/request-quotation.component';
import { GroupSizeComponent } from './group-size/group-size.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ModifyCartButtonComponent,
    GroupSizeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingCartRoutingModule,
    QuotationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ShoppingCartComponent,
    ModifyCartButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    RequestQuotationComponent,
    GroupSizeComponent
  ]
})
export class ShoppingCartModule { }
