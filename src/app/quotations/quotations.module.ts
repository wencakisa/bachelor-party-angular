import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { QuotationListComponent } from './quotation-list/quotation-list.component';

import { QuotationsRoutingModule } from './quotations-routing.module';
import { RequestQuotationComponent } from './request-quotation/request-quotation.component';
import { QuotationDetailsComponent } from './quotation-details/quotation-details.component';

@NgModule({
  declarations: [
    QuotationListComponent,
    RequestQuotationComponent,
    QuotationDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuotationsRoutingModule
  ],
  exports: [
    RequestQuotationComponent
  ]
})
export class QuotationsModule { }
