import { Component, OnInit, Input } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { AuthenticationService } from "../authentication/shared/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() title: string;

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
  	this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }
}
