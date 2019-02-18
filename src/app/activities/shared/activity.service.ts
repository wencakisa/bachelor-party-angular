import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Activity } from './activity.model';
import { AppSettings } from '../../app.settings'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activitiesUrl = `${AppSettings.API_BASE}/activities`;

  constructor(private http: HttpClient) {
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl)
      .pipe(
        map(response => {
          return response.map((activity: Activity) => {
            return new Activity().deserialize(activity)
          })
        }),
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

  createActivity(activity: Activity) {
    let requestBody = JSON.stringify({ 'activity': activity });

    return this.http.post<Activity>(this.activitiesUrl, requestBody, AppSettings.DEFAULT_HTTP_OPTIONS)
      .pipe(
        tap(_ => this.log(`Created activity ${activity}`))
      );
  }

  updateActivity(activity: Activity) {
    const url = `${this.activitiesUrl}/${activity.id}`;

    return this.http.put<Activity>(url, activity)
      .pipe(
        tap(_ => this.log(`Updated activity ${activity}`))
      );
  }

  deleteActivity(id: number) {
    const url = `${this.activitiesUrl}/${id}`;

    return this.http.delete<Activity[]>(url)
      .pipe(
        tap(_ => this.log(`Deleted activity id=${id}`))
      );
  }

  private log(message: string) {
    console.log(`ActivityService: ${message}`);
  }
}
