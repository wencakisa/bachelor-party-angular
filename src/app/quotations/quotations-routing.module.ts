import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAuthGuard } from '../admin/guards/admin-auth.guard';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { QuotationDetailsComponent } from './quotation-details/quotation-details.component';

const quotationRoutes: Routes = [
  { path: 'quotations', component: QuotationListComponent, canActivate: [AdminAuthGuard] },
  { path: 'quotations/:id', component: QuotationDetailsComponent, canActivate: [AdminAuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forChild(quotationRoutes) ],
  exports: [ RouterModule ]
})
export class QuotationsRoutingModule { }
