import { Injectable } from '@angular/core';
import { options } from './auth.options';
import { Router} from '@angular/router';

let Auth0Lock: any = require('auth0-lock').default;

@Injectable()
export class AuthService {
  profile:any;
  // Configure Auth0
  lock = new Auth0Lock('1OdxsiT2ns9Gg66V8bVRC450DoAfV4G2','kaskada.eu.auth0.com',options);

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, function (error:any, profile:any) {
        if(error) {
          console.log("error-auth0");
          throw new Error(error);
        }
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
