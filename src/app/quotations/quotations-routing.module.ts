import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotationListComponent } from './quotation-list/quotation-list.component';

const quotationRoutes: Routes = [
  { path: 'quotations', component: QuotationListComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(quotationRoutes) ],
  exports: [ RouterModule ]
})
export class QuotationsRoutingModule { }
