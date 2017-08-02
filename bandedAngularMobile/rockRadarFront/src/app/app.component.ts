import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    userName: '',
    password: '',

  }
  
  onPress() { 
    console.log("onPress()");
    console.log(this.user); //declare new instance of a user here? this.user = user.new(userName, password)
    this.user = {
      userName: '',
      password: '',
    }
  }
}
