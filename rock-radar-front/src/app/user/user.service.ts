import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import "rxjs";

@Injectable()
export class UserService {

  

  constructor(private _http: Http) { 
  }

}