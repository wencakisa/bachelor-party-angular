import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

import { ShoppingCartComponent } from './shopping-cart.component';
import { GroupSizeModalComponent } from './group-size/modal/group-size-modal.component';
import { GroupSizeFormComponent } from './group-size/form/group-size-form.component';
import { ModifyCartButtonComponent } from './shared/modify-cart-button/modify-cart-button.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    GroupSizeModalComponent,
    GroupSizeFormComponent,
    ModifyCartButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingCartRoutingModule
  ],
  exports: [
    ShoppingCartComponent,
    ModifyCartButtonComponent
  ],
  entryComponents: [
    GroupSizeModalComponent
  ]
})
export class ShoppingCartModule { }
