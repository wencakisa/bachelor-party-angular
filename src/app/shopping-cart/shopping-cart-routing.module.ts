import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart.component';

const shoppingCartRoutes: Routes = [
  { path: 'cart', component: ShoppingCartComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(shoppingCartRoutes) ],
  exports: [ RouterModule ]
})
export class ShoppingCartRoutingModule { }
