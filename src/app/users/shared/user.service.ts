import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = `${AppSettings.API_BASE}/users`;
 
  constructor(private http: HttpClient) { }
 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log('Fetched users'))
      )
  }
 
  getAdminAndGuideUsers(): Observable<User[]> {
    let params = new HttpParams().set('role', 'admin');
 
    return this.http.get<User[]>(this.usersUrl, { params: params })
      .pipe(
        // TODO: Error handling, using catchError() method from rxjs
        tap(_ => this.log('Fetched users'))
      )
  }
 
  createUser(user: User) {
    let requestBody = JSON.stringify({ 'user': user });
    
    return this.http.post<User>(this.usersUrl, requestBody, AppSettings.DEFAULT_HTTP_OPTIONS)
      .pipe(
        tap(_ => this.log(`Created user ${user}`))
      );
  }
 
  deleteUser(id: number) {
    const url = `${this.usersUrl}/${id}`;
 
    return this.http.delete<User[]>(url)
      .pipe(
        tap(_ => this.log(`Deleted user id=${id}`))
      );
  }
 
  private log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
