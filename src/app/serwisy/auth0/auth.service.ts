import { Injectable } from '@angular/core';
import { options } from './auth.options';
import { Router} from '@angular/router';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('1OdxsiT2ns9Gg66V8bVRC450DoAfV4G2','kaskada.eu.auth0.com',options);

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, function (error:any, profile:any) {
        if(error){
          console.log("error-auth0");
          throw new Error(error);
        }
        // Set Profile
        localStorage.setItem('profile', JSON.stringify(profile));
        //console.log("profile: "+JSON.stringify(profile));
        // Set Token
        localStorage.setItem('id_token', authResult.idToken);
        //console.log("idToken: "+authResult.idToken);
      })
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public logout() {
    // Remove info from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigateByUrl('/');
  }

  profile:any;
  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'profile'
    this.profile = localStorage.getItem('profile');
    return Boolean(this.profile);
  }

}
