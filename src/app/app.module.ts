import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ActivitiesModule } from './activities/activities.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';

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
    IfInRoleDirective
  ],
  imports: [
    BrowserModule,
    ActivitiesModule,
    AuthenticationModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
