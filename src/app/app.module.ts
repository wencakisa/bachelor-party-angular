import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ActivitiesModule } from './activities/activities.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

import { DashboardComponent } from './dashboard/dashboard.component'
import { NavigationComponent } from './navigation/navigation.component';
import { IfInRoleDirective } from './shared/if-in-role.directive';
import { QuotationsModule } from './quotations/quotations.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    IfInRoleDirective
  ],
  imports: [
    BrowserModule,
    ActivitiesModule,
    AuthenticationModule,
    AdminModule,
    ShoppingCartModule,
    QuotationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
