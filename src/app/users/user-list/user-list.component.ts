import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  admins: User[];
  guides: User[];
  customers: User[];
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.getUsers();
  }
 
  getUsers(): void {
    this.userService.getAllUsers()
      .subscribe(users => {
        this.admins = users.filter(user => user.role === AppSettings.ROLE_ADMIN);
        this.guides = users.filter(user => user.role === AppSettings.ROLE_GUIDE);
        this.customers = users.filter(user => user.role === AppSettings.ROLE_CUSTOMER);
        this.users = users;
      });
  }

  deleteUser(user: User) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(user.id)
        .subscribe((users: User[]) => {
          this.users = this.users.filter(u => u !== user);
          
          this.admins = this.users.filter(user => user.role === AppSettings.ROLE_ADMIN);
          this.guides = this.users.filter(user => user.role === AppSettings.ROLE_GUIDE);
          this.customers = this.users.filter(user => user.role === AppSettings.ROLE_CUSTOMER);
        });
    }
  }
}
