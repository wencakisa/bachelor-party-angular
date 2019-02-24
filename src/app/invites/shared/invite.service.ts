import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppSettings } from 'src/app/app.settings';
import { Invite } from './invite.model';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  private invitesUrl = `${AppSettings.API_BASE}/invites`

  constructor(
    private http: HttpClient
  ) { }

  invite(invite: Invite) {
    let requestBody = JSON.stringify({ 'invite': invite });

    return this.http.post<Invite>(this.invitesUrl, requestBody, AppSettings.DEFAULT_HTTP_OPTIONS)
      .subscribe();
  }
}
