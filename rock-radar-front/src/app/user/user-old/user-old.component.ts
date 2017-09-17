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

  constructor(private user: UserService) { }
  public ngOnInit() {
    
  }

}
