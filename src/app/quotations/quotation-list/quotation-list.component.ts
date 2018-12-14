import { Component, OnInit } from '@angular/core';

import { Quotation } from '../shared/quotation.model';
import { QuotationService } from '../shared/quotation.service';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {

  quotations: Quotation[];

  constructor(private quotationService: QuotationService) { }

  ngOnInit() {
    this.getQuotations();
  }

  getQuotations(): void {
    this.quotationService.getPendingQuotations()
      .subscribe(quotations => this.quotations = quotations);
  }
}
