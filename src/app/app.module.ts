import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AngularTokenModule } from 'angular-token';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSettings } from './app.settings';

import { ActivitiesModule } from './activities/activities.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavigationComponent } from './navigation/navigation.component';
import { IfInRoleDirective } from './shared/if-in-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    IfInRoleDirective,
  ],
  imports: [
    BrowserModule,
    ActivitiesModule,
    ShoppingCartModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: AppSettings.API_BASE
    }),
    NgbModule
  ],
  providers: [ AngularTokenModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
