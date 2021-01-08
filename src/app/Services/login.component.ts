import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <p>
      <a [hidden]="needLogin()">Login</a>
    </p>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  needLogin() {
    return !this.auth.isAuthenticated();
  }
}
