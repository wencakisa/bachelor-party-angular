import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.getUsers();
  }
 
  getUsers(): void {
    this.userService.getAllUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(user: User) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(user.id)
        .subscribe((users: User[]) => {
          this.users = this.users.filter(u => u !== user);
        });
    }
  }
}
