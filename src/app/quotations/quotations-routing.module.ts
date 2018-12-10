import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAuthGuard } from '../admin/guards/admin-auth.guard';
import { QuotationListComponent } from './quotation-list/quotation-list.component';

const quotationRoutes: Routes = [
  { path: 'quotations', component: QuotationListComponent, canActivate: [AdminAuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forChild(quotationRoutes) ],
  exports: [ RouterModule ]
})
export class QuotationsRoutingModule { }
