// import { User } from "./../user";
// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { UserService } from "../user.service";
// declare var $: any;
// declare var jQuery:any;
// @Component({
//   selector: 'app-user-new',
//   templateUrl: './user-new.component.html',
//   styleUrls: ['./user-new.component.css']
// })
// export class UserNewComponent implements OnInit {
//   newUser = new User();
//   // multiSelectedOptions = "";
//   // private selectOptions = [];
//   @Output() createNewUserEvent = new EventEmitter();
  
  
//   constructor(private user: UserService) { }

//   public ngOnInit() {
//     // window.setTimeout(()=>{
//     //   this.selectOptions = [
//     //     {value:1 ,name:"ACOUSTIC"},
//     //     {value:2 ,name:"ALTERNATIVE ROCK"},
//     //     {value:3 ,name:"BLUES"},
//     //     {value:4 ,name:"CLASSIC ROCK"},
//     //     {value:5 ,name:"CLASSICAL"},
//     //     {value:6 ,name:"COMEDY"},
//     //     {value:7 ,name:"COUNTRY"},
//     //     {value:8 ,name:"ELECTRONIC"},
//     //     {value:9 ,name:"EXPERIMENTAL"},
//     //     {value:10 ,name:"JAZZ"},
//     //     {value:11 ,name:"METAL"},
//     //     {value:12 ,name:"POP"},
//     //     {value:13 ,name:"RAGGAE"},
//     //     {value:14 ,name:"ROCK"},
//     //     {value:15 ,name:"R&B"},
//     //   ]
//     // },100);
//   }
 
//   create(){
//     // call server to save first then clear object
//     this.createNewUserEvent.emit(this.newUser);
//     this.newUser = new User();
//   }
// }