import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1, "suckboi@welterweight.com", "if you can't a tiger by its tail don't fail"),
    new User(2, "whatever@gmail.com", "I hate justice"),
    new User(3, "trixter@phoney.com", "I love waking up but am hated by all")
  ];
  // user = this.users;
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    // this.getUsers();
  }
  
  create(user: User){
    this.users.push(user);
    console.log(user);
  
  }
  
  // destroy(user: User) {
  //   const i = this.users.indexOf(user);
  //   this.users.splice(i, 1);
  // }
  
  // update(users: any) {
  //   console.log(users);
  //   const i = this.users.indexOf(users.original)
  //   this.users[i] = users.edited
  // }
  
  // getUsers(){
  //   this._userService.getUsers().then(users => this.users = users)
  // }
  
}
