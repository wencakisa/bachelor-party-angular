import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppSettings } from '../../app.settings';

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
    let groupSize = AppSettings.getGroupSizeFromLocalStorage();
    let activitiesInCart = AppSettings.getActivitiesFromLocalStorage();

    let quotation_params = {
      group_size: groupSize,
      user_email: this.requestQuotationForm.value.userEmail,
      activities: activitiesInCart,
      prices: activitiesInCart.map(activity => activity.selectedPrice)
    }

    return new Quotation().deserialize(quotation_params)
  }
}
