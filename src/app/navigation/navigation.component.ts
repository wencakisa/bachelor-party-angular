import { Component, OnInit, Input } from '@angular/core';

import { ShoppingCartService } from '../shopping-cart/shared/shopping-cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() title: string;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  getCartSize(): number {
    return this.cartService.getCartSize();
  }

  getGroupSize(): number {
    return this.cartService.getGroupSize();
  }
}
