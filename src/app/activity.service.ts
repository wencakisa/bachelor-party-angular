import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Activity } from './activity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private host = 'http://localhost:3000'
  private activitiesUrl = `${this.host}/activities`;

  constructor(private http: HttpClient) {
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl)
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log('Fetched activities'))
      )
  }

  getActivity(id: number): Observable<Activity> {
    const url = `${this.activitiesUrl}/${id}`;

    return this.http.get<Activity>(url)
      .pipe(
        tap(_ => this.log(`Fetched activity id=${id}`))
      );
  }

  private log(message: string) {
    console.log(`ActivityService: ${message}`);
  }
}
