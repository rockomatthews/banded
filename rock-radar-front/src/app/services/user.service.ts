import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../user/user';


@Injectable()
export class UserService {
    constructor(private http: Http) {}
    userDetails = {};

    public saveUserInfo(userInfo) {
        this.userDetails  = userInfo;
    }

    public getUserDetails() {
        return this.userDetails;
    }

    public getAllUsers() {

        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers,
            method: 'GET'
        });

        return  Observable.create((observer) => {
            let fullUrl = 'http://localhost:8000/api/users';
            this.http.request(fullUrl, options)
            .map(this.parseData)
            .subscribe(
                (data) => {
                    observer.next(data);
                },
                (err) => {
                    observer.error(err);
                }
            )
        });
    }

    private parseData(res: Response)  {
        return res.json() || [];
    }
}