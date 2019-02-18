import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public userForm: FormGroup;
  public roles = [AppSettings.ROLE_ADMIN, AppSettings.ROLE_GUIDE];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', [Validators.required]]
    });

    this.userForm.get('role').setValue(this.roles[0]);
  }

  onSubmit() {
    this.userService.createUser(this.userForm.value)
      .subscribe(
        data => {
          this.router.navigate(['users']);
        },
        error => {
          alert(error);
        }
      );
  }
}
