import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppSettings } from '../../app.settings';

import { Quotation } from './quotation.model';


@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private quotationsUrl = `${AppSettings.API_BASE}/quotations`;

  constructor(private http: HttpClient) { }

  getQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.quotationsUrl)
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log('Fetched quotations'))
      )
  }

  getPendingQuotations(): Observable<Quotation[]> {
    let params = new HttpParams().set('status', 'pending');

    return this.http.get<Quotation[]>(this.quotationsUrl, { params: params })
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log('Fetched pending quotations'))
      )
  }

  getQuotation(id: number): Observable<Quotation> {
    const url = `${this.quotationsUrl}/${id}`;

    return this.http.get<Quotation>(url)
      .pipe(
        tap(_ => this.log(`Fetched Quotation id=${id}`))
      );
  }

  requestQuotation(quotation: Quotation) {
    let requestBody = JSON.stringify({ 'quotation': quotation });

    return this.http
      .post<Quotation>(this.quotationsUrl, requestBody, AppSettings.DEFAULT_HTTP_OPTIONS)
      .subscribe(res => {
        AppSettings.setQuotationSentFromEmailInLocalStorage(quotation.user_email);
      });
  }

  updateQuotationStatus(quotationId: number, status: string) {
    const url = `${this.quotationsUrl}/${quotationId}`;
    let params = { status: status };

    return this.http.patch<Quotation>(url, params)
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log(`Quotation id=${quotationId} is ${status}`))
      )
  }

  canRequestQuotation(): boolean {
    return !AppSettings.getQuotationSentFromEmailFromLocalStorage();
  }

  private log(message: string) {
    console.log(`QuotationService: ${message}`);
  }
}
