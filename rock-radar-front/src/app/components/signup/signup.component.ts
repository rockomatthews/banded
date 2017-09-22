import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newUser = new User();
  private selectOptions = [];
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}
  public ngOnInit() {
    window.setTimeout(()=>{
      this.selectOptions = [
        {value:1 ,name:"ACOUSTIC"},
        {value:2 ,name:"ALTERNATIVE ROCK"},
        {value:3 ,name:"BLUES"},
        {value:4 ,name:"CLASSIC ROCK"},
        {value:5 ,name:"CLASSICAL"},
        {value:6 ,name:"COMEDY"},
        {value:7 ,name:"COUNTRY"},
        {value:8 ,name:"ELECTRONIC"},
        {value:9 ,name:"EXPERIMENTAL"},
        {value:10 ,name:"JAZZ"},
        {value:11 ,name:"METAL"},
        {value:12 ,name:"POP"},
        {value:13 ,name:"RAGGAE"},
        {value:14 ,name:"ROCK"},
        {value:15 ,name:"R&B"},
      ]
    },100);
  }
  signup() {
    this.authService.signup(this.newUser).subscribe(
      (url) => {
        this.router.navigate([url]);
      },
      (err) => {

      }
    );
  }

}