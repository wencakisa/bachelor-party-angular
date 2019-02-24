import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { AppSettings } from '../../app.settings';
import { Party } from './party.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  private partiesUrl = `${AppSettings.API_BASE}/parties`

  constructor(private http: HttpClient) { }

  getParties(): Observable<Party[]> {
    return this.http.get<Party[]>(this.partiesUrl)
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log('Fetched parties'))
      )
  }

  getParty(id: number): Observable<Party> {
    const url = `${this.partiesUrl}/${id}`;

    return this.http.get<Party>(url)
      .pipe(
        map(res => {
          return new Party().deserialize(res)
        }),
        tap(_ => this.log(`Fetched party id=${id}`))
      );
  }

  private log(message: string) {
    console.log(`PartyService: ${message}`)
  }
}
