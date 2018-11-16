import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationListComponent } from './quotation-list/quotation-list.component';

import { QuotationsRoutingModule } from './quotations-routing.module';

@NgModule({
  declarations: [
    QuotationListComponent
  ],
  imports: [
    CommonModule,
    QuotationsRoutingModule
  ]
})
export class QuotationsModule { }
