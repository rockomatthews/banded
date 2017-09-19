import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    constructor() {}
    private loggedIn = false;
    public redirectUrl = '/dashboard';

    signin(userDetails) {
        return  Observable.create((observer) => {
            setTimeout(() => {
                this.loggedIn = true;
                observer.next(this.redirectUrl);
            }, 3000);
        });
    }

    signup(newUserDetails) {
        return  Observable.create((observer) => {
            setTimeout(() => {
                this.loggedIn = true;
                observer.next(this.redirectUrl);
            }, 3000);
        });
    }

    logout() {
        return  Observable.create((observer) => {
            setTimeout(() => {
                this.loggedIn = false;
                observer.next('/signin');
            }, 3000);
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

