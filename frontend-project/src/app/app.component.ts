import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-front';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token){
      this.authService.authorized = true;
    }
  }
}
