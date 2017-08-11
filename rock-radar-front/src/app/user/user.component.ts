import { UserService } from "./user.service";
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1, "suckboi", "if you can't a tiger by its tail don't fail", ["Alternative Rock", "Metal"], "Grandtour69!", "Grandtour69!"),
    new User(2, "jimbo", "whatever", ["Metal"], "closetLoser!", "closetLoser!"),
    new User(3, "trixster", "I love waking up but am hated by all", ["Pop", "R&B"], "Wuswuswus44!", "Wuswuswus44!")
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers(){
    // this._userService.getUsers()
    // .then(users => this.users = users)
  }

}
