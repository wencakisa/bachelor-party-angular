import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularTokenModule } from 'angular-token';

import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSettings } from './app.settings'

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: AppSettings.API_BASE
    })
  ],
  providers: [ AngularTokenModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
