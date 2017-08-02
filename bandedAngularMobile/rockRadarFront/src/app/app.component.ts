import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user: User;
  
  ngOnInit() {
    this.user = {
    userName: '',
    motto: '',
    password: '',
    confirmPassword: '',
    genre: 'null'
    }
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
}
