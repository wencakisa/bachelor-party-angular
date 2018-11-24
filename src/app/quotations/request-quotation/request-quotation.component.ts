import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppSettings } from 'src/app/app.settings';

import { Quotation } from '../shared/quotation.model';
import { QuotationService } from '../shared/quotation.service';

@Component({
  selector: 'app-request-quotation',
  templateUrl: './request-quotation.component.html',
  styleUrls: ['./request-quotation.component.css']
})
export class RequestQuotationComponent implements OnInit {

  requestQuotationForm = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(private quotationService: QuotationService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const quotation = this.prepareSave();

    this.quotationService.requestQuotation(quotation);
    this.requestQuotationForm.disable();
  }

  private prepareSave(): Quotation {
    let quotation_params = {
      group_size: AppSettings.getGroupSizeFromLocalStorage(),
      user_email: this.requestQuotationForm.value.userEmail,
      activity_ids: AppSettings.getActivitiesFromLocalStorage().map(activity => activity.id)
    }

    return new Quotation().deserialize(quotation_params)
  }
}
