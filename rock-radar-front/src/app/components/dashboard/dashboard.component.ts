import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}
  currentUser = {};
  allUsers = [];
  ngOnInit() {
    this.currentUser = this.userService.getUserDetails();
    this.userService.getAllUsers()
    .subscribe(
      (data) => {
        this.allUsers = data.users;
        console.log(this.allUsers);
      },
      (err) => {
        console.log(err);
      }
    );

  }
  logout() {
    this.authService.logout()
    .subscribe(
      (url) => {
        //avigate to dashboard
        this.router.navigate([url]);
      },
      (err) => {}
    );
  }
}