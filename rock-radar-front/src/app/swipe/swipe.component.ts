import { User } from "../user/user";
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

import { Routes, Router } from '@angular/router';
import { UserService } from "../user/user.service";
declare var $: any;
declare var jQuery:any;

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent implements OnInit {
  @Input() users;
  @Output() updateUserEvent = new EventEmitter();
  userCurrent = this.user;
  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
    console.log(this.userCurrent)
  }

  update(users) {
    this.updateUserEvent.emit(users)
  }
  
}



