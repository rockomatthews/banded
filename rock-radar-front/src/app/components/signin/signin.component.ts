import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
   constructor(private authService: AuthService, private router: Router) {}
   public currentUser = {
     email: '',
     password: ''
   };

   signin() {
     this.authService.signin(this.currentUser)
         .subscribe(
           (url) => {
             //avigate to dashboard
             this.router.navigate([url]);
           },
           (err) => {}
         );
   }
}