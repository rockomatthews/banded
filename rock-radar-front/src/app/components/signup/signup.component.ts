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
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

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