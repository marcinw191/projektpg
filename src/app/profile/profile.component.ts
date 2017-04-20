import { Component, OnInit, Input }   from '@angular/core';
import { AuthService } from '../auth0/auth.service';

import * as moment from 'moment-timezone';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  time:any;

  funkcja: string = 'zleceniodawca';

  zmienFunkcja(funkcja: string) {
    this.funkcja = funkcja;
  }

  constructor(private auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
    this.time = moment(this.profile.updated_at).tz("Europe/Warsaw").format('YYYY-MM-DD HH:mm:ss');
    console.log(this.time);
  }

  ngOnInit(){
    // this.profil.zdjecie = this.profile.picture;
    // this.profil.nazwa   = this.profile.name;
    // this.profil.email   = this.profile.email;
  }
}
