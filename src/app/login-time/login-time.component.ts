import { Component, OnInit } from '@angular/core';
import { AuthService }             from '../serwisy/auth0/auth.service';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-login-time',
  templateUrl: './login-time.component.html',
  styleUrls: ['./login-time.component.css']
})
export class LoginTimeComponent implements OnInit {
  profile:any;
  time:any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
    this.time = moment(this.profile.updated_at).tz("Europe/Warsaw").format('YYYY-MM-DD HH:mm:ss');
    console.log(this.time);
  }

}
