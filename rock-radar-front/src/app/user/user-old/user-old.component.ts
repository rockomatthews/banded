import { User } from '../user';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { UserService } from "../user.service";
declare var $: any;
declare var jQuery:any;

@Component({
  selector: 'app-user-old',
  templateUrl: './user-old.component.html',
  styleUrls: ['./user-old.component.css']
})
export class UserOldComponent implements OnInit {
  @Input() users;
  currentUser = this.user;
  @Output() createUserEvent = new EventEmitter();

  constructor(private router:Router, private user: UserService) { }
  public ngOnInit() {
    
  }

  userLoggedIn(e) {
    e.preventDefault();
    console.log(e);
    var email = this.currentUser.email;
    var password = this.currentUser.password;

    if(email == "admin" && password == "admin") {
      this.user.setUserLoggedIn();
      this.router.navigate(["app-swipe"]);
    }

  }

}
