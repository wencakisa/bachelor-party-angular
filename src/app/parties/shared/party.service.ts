import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
        tap(_ => this.log('Fetched parties'))
      )
  }

  private log(message: string) {
    console.log(`PartyService: ${message}`)
  }
}
