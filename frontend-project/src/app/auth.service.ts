import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

import { LoginResponse } from './user';
import { User } from "./interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:User;
  authorized:Boolean = false;
  BASE_URL = 'http://localhost:8000/'
  constructor(private http: HttpClient) { }

  // login(username:string, password:string) {
  //   if(username !== 'admin' || password !== 'admin123') return false;
  //   // else return false;
  //   this.user = {
  //     id: 1,
  //     username: username,
  //     password: password
  //   }
  //   return true;
  // }

  login(username, password): Observable<LoginResponse> {
    this.authorized = true;
    return this.http.post<LoginResponse>(`${this.BASE_URL}api/login/`, {
      username,
      password
    })
  }

  register(firstName, lastName, username,password):Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}api/users/`, {
      username,
      password,
      first_name:firstName,
      last_name:lastName
    })
  }

  isAuthorized() {
    return this.authorized;
  }
}
