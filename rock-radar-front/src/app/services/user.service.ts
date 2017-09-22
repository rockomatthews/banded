import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../user/user';


@Injectable()
export class UserService {
    userDetails = {};

    public saveUserInfo(userInfo) {
        this.userDetails  = userInfo;
    }

    public getUserDetails() {
        return this.userDetails;
    }
}