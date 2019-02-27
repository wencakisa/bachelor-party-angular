import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Quotation } from '../shared/quotation.model';
import { QuotationService } from '../shared/quotation.service';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quotation-details',
  templateUrl: './quotation-details.component.html',
  styleUrls: ['./quotation-details.component.css']
})
export class QuotationDetailsComponent implements OnInit {

  public quotation: Quotation;
  public customEmailMessage: FormControl;

  constructor(private route: ActivatedRoute,
    private quotationService: QuotationService,
    private router: Router,
    private toastr: ToastrService) {
    this.customEmailMessage = new FormControl('');
  }

  ngOnInit() {
    this.getQuotation();
  }

  getQuotation(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.quotationService.getQuotation(id).subscribe(quotation => this.quotation = quotation);
  }

  updateQuotationStatus(status: string): void {
    if (confirm(`Are you sure you want this quotation to be ${status}?`)) {
      this.quotationService.updateQuotationStatus(this.quotation.id, status, this.customEmailMessage.value)
      .subscribe(
        res => {
          this.toastr.success(`Quotation ${status} successfully!`)
          this.router.navigate(['/quotations']);
        },
        err => {
          alert(err);
        }
      );
    }
  }
}
