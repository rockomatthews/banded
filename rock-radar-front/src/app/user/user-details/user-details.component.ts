import { User } from '../user';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  userCurrent = this.user;
  @Output() showUserEvent = new EventEmitter();

  constructor() { }

  

  ngOnInit() {
    
  }

  showLoggedUser(e){
    this.showUserEvent.emit({original: this.user, edited:this.userCurrent});

  }

}
