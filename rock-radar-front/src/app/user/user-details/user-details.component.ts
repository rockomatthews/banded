import { User } from '../user';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  @Output() showUserEvent = new EventEmitter();
  userShow: User = this.user;
  constructor() { }

  

  ngOnInit() {
  
  }

  show() {
    this.userShow
    this.user
    this.showUserEvent.emit({original: this.user});
  }

}
