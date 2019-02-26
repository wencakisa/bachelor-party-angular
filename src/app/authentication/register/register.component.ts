import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularTokenService } from 'angular-token';
import { AuthenticationService } from '../shared/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(
    private tokenAuthService: AngularTokenService,
    private authService: AuthenticationService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (!!this.tokenAuthService.userSignedIn()) {
      this.authService.logOutUser().subscribe()
    }

    if (this.getInvitationToken()) {
      let invitationTokenObj = {
        invitation_token: this.getInvitationToken()
      }

      Object.assign(this.signUpUser, invitationTokenObj)
    }
  }

  onSignUpSubmit() {
    this.tokenAuthService.registerAccount(this.signUpUser)
      .subscribe(
        (res) => {
          if (res.status == 'success') {
            this.toast.success('You have registered successfully. You can login now.')
            this.router.navigate(['/login'])
          }
        },
        (err) => {
          this.toast.error(err.error.errors.full_messages)
        }
      )
  }

  getInvitationToken(): string {
    return this.route.snapshot.queryParams['invitation_token']
  }
}
