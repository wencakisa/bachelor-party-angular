import { Component, OnInit, Input } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { AuthenticationService } from "../authentication/shared/authentication.service";
import { Router } from "@angular/router";

import { ShoppingCartService } from '../shopping-cart/shared/shopping-cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() title: string;
  constructor(public authService: AuthenticationService, private router: Router, private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  logOut() {
  	this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }
  
  getCartSize(): number {
    return this.cartService.getCartSize();
  }

  getGroupSize(): number {
    return this.cartService.getGroupSize();
  }
}
