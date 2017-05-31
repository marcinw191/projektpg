import { Injectable } from '@angular/core';
import { options } from './auth.options';
import { Router} from '@angular/router';
import Auth0Lock from 'auth0-lock';

import { BazaUzytkownikowService } from '../firebase-uzytkownicy/bazauzytkownikow.service';

//declare let Auth0Lock: any;

@Injectable()
export class AuthService {
  profile:any;
  // Configure Auth0
  lock = new Auth0Lock('1OdxsiT2ns9Gg66V8bVRC450DoAfV4G2','kaskada.eu.auth0.com',options);

  constructor(private router: Router, private bazaUzytkownikowService: BazaUzytkownikowService) {
    let _this = this;
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      _this.lock.getProfile(authResult.idToken, function (error:any, profile:any) {
        if(error) {
          console.log("error-auth0");
          throw new Error(error);
        }
        let _profile = profile;
        _this.bazaUzytkownikowService.getUsers().subscribe(users => {
          let wybor = null;
          for (let x = 0; x < users.length; x++) {
            if (users[x].user_id ==  _profile.user_id) {
              wybor = x;
            }
          }
          if (wybor == null)
          {
            let email = _profile.user_id.indexOf("twitter") != -1 ? "" : _profile.email;
            _this.bazaUzytkownikowService.addUser({
              numerUzytkownika: users.length + 1,
              user_id: _profile.user_id,
              zdjecie: _profile.picture,
              nazwa: _profile.name,
              e_mail: email,
              typ: 'zleceniodawca',
              telefon: '',
              ulica: '',
              nr_bud: '',
              kod: '',
              miejscowosc: '',
            })
          }
        });
        localStorage.setItem('profile', JSON.stringify(profile)); // Set Profile
        localStorage.setItem('id_token', authResult.idToken);     // Set Token
      })
    });
  }

  public login() {
    this.lock.show();     // Call the show method to display the widget.
  }

  public logout() {
    // Remove info from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigateByUrl('/');
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'profile'
    this.profile = localStorage.getItem('profile');
    return Boolean(this.profile);
  }

  public getProfileAuth() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    return this.profile;
  }
}
