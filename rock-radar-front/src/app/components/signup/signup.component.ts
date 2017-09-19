import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  newUser = {
    email: '',
    password: '',
    confirmPassword: ''
  };

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