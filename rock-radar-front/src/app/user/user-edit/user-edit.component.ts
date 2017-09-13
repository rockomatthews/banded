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
  @Input() user: User;
  
  @Output() updateUserEvent = new EventEmitter();
  userEdit: User = new User();
  
  constructor(private router:Router) { }

  ngOnInit() {
    Object.assign(this.userEdit, this.user);
    console.log(this.userEdit);
  }

  update() {
    this.userEdit.editable = false;
    this.updateUserEvent.emit({original: this.user, edited:this.userEdit});
  }

}
