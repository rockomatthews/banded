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
  newUser = new User();
  oldUser = this.user;
  @Input() users;
  @Output() createUserEvent = new EventEmitter();

  constructor(private router:Router, private user: UserService) { }
  public ngOnInit() {
    
  }

  loginOld(e) {
    var email = this.user.email;
    var password = this.user.password
    this.createUserEvent.emit(this.newUser);
    this.newUser = new User();
      
      if (email == "admin" && password == "admin"){
        this.user.setUserLoggedIn();
        this.router.navigate(['app-swipe'])
      }


  }

}
