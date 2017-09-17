import { User } from "./../user";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Routes, Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit() {

  }


}
