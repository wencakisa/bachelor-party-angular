import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthenticationService } from "../shared/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInUser = {
    login: '',
    password: ''
  };

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  onSignInSubmit() {
    this.authService.logInUser(this.signInUser).subscribe(
        res => {
          if (res.status == 200) {
            this.router.navigate(['/admin']);
          }
        },

        error => {
          alert(error); //TODO fix alert
        }
    )
  }
}
