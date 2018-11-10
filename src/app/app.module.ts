import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularTokenModule } from 'angular-token';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSettings } from './app.settings';

import { ActivitiesModule } from './activities/activities.module';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavigationComponent } from './navigation/navigation.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { IfInRoleDirective } from './shared/if-in-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    ShoppingCartComponent,
    IfInRoleDirective,
  ],
  imports: [
    BrowserModule,
    ActivitiesModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: AppSettings.API_BASE
    }),
  ],
  providers: [ AngularTokenModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
