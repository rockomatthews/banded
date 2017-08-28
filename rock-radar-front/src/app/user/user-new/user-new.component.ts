import { User } from "./../user";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  newUser = new User();

  selectOptions = [
            {value:"ACOUSTIC",name:"ACOUSTIC"},
            {value:"ALTERNATIVE ROCK",name:"ALTERNATIVE ROCK"},
            {value:"BLUES",name:"BLUES"},
            {value:"CLASSIC ROCK",name:"CLASSIC ROCK"},
            {value:"CLASSICAL",name:"CLASSICAL"},
            {value:"COMEDY",name:"COMEDY"},
            {value:"COUNTRY",name:"COUNTRY"},
            {value:"ELECTRONIC",name:"ELECTRONIC"},
            {value:"EXPERIMENTAL",name:"EXPERIMENTAL"},
            {value:"JAZZ",name:"JAZZ"},
            {value:"METAL",name:"METAL"},
            {value:"POP",name:"POP"},
            {value:"RAGGAE",name:"RAGGAE"},
            {value:"ROCK",name:"ROCK"},
            {value:"R&B",name:"R&B"}, 
          ];
  @Output() createNewUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create(){
    // call server to save
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }
  
}

