import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from './user.service';


@Injectable()
export class AuthService {
    constructor(private userService: UserService, private http: Http) {}
    private loggedIn = false;
    public redirectUrl = '/dashboard';
    private baseServerUrl = 'http://localhost:8000/';

    signin(userDetails) {
        let headers = this.addDefaultHeaders();
        let options = new RequestOptions({
            headers,
            method: 'POST',
            body: userDetails
        });

        return  Observable.create((observer) => {
            let fullUrl = this.baseServerUrl + 'api/users/authenticate';
            this.http.request(fullUrl, options)
            .map(this.parseData)
            .subscribe(
                (data) => {
                    this.userService.saveUserInfo(data);
                    this.loggedIn = true;
                    observer.next(this.redirectUrl);
                },
                (err) => {
                    observer.error(err);
                }
            )
        });
    }

    signup(newUserDetails) {
        console.log(newUserDetails);
        let headers = this.addDefaultHeaders();
        let options = new RequestOptions({
            headers,
            method: 'POST',
            body: newUserDetails
        });

        return  Observable.create((observer) => {
            let fullUrl = this.baseServerUrl + 'api/users';
            this.http.request(fullUrl, options)
            .map(this.parseData)
            .subscribe(
                (data) => {
                    this.userService.saveUserInfo(data);
                    this.loggedIn = true;
                    observer.next(this.redirectUrl);
                },
                (err) => {
                    observer.error(err);
                }
            )
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

    addDefaultHeaders() {
        return new Headers({
            'Content-Type': 'application/json'
        });
    }

    private parseData(res: Response)  {
        return res.json() || [];
    }
}

