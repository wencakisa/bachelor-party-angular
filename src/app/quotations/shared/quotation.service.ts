import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppSettings } from '../../app.settings';

import { Quotation } from './quotation.model';


@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private quotationsUrl = `${AppSettings.API_BASE}/quotations`;

  constructor(private http: HttpClient) {
  }

  getQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.quotationsUrl)
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log('Fetched activities'))
      )
  }

  getQuotation(id: number): Observable<Quotation> {
    const url = `${this.quotationsUrl}/${id}`;

    return this.http.get<Quotation>(url)
      .pipe(
        tap(_ => this.log(`Fetched Quotation id=${id}`))
      );
  }

  private log(message: string) {
    console.log(`QuotationService: ${message}`);
  }
}
