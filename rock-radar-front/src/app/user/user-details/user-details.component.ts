import { User } from '../user';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() users;
  @Output() showUserEvent = new EventEmitter();

  constructor() { }

  

  ngOnInit() {
  
  }

}
