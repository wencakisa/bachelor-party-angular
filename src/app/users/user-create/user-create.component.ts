import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';
import { AppSettings } from 'src/app/app.settings';
import { ToastrService } from 'ngx-toastr';

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
    private userService: UserService,
    private toastr: ToastrService) { }

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
        res => {
          this.toastr.success('User account created successfully!')
          this.router.navigate(['/users']);
        },
        err => {
          this.toastr.error(err.error.errors[0])
        }
      );
  }
}
