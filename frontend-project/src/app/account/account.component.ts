import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:User;
  constructor(
    private authService:AuthService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  save(): void {
    console.log(this.user)
    this.authService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  cancel():void {
    this.goBack();
  }

  getUser():void {
    const username = localStorage.getItem('user');
    this.authService.getUser(username)
      .subscribe(user => {
        this.user = user[0]
      });
  }

}
