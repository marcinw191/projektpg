import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';
import { DialogService } from 'ngx-bootstrap-modal';
import { options } from '../../app-variables';
import { BazaUzytkownikowService } from '../firebase-uzytkownicy/bazauzytkownikow.service';

@Injectable()
export class AuthService {

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  private userProfile: any;
  private profile: any;
  private opcje: any = options;

  constructor(
    private router: Router,
    private bazaUzytkownikowService: BazaUzytkownikowService,
    public dialogService: DialogService) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.getProfile((err, profile) => {
          localStorage.setItem('profile', JSON.stringify(profile));
          let _profile = this.getProfileAuth();
          this.bazaUzytkownikowService.getUsers().subscribe(users => {
            let wybor = null;
            let nr = users.length + 1;
            for (let x = 0; x < users.length; x++) {
              if (users[x].user_id == _profile.sub) {
                wybor = x;
              }
            }
            if (wybor == null) {
              this.copyProfileToUser(_profile, nr);
            }
          });
        });
        this.router.navigate(['/']);
      }
      else if (err) {
        this.router.navigate(['/kontakt']);
        this.opcje.icon = 'error';
        this.dialogService.alert('', `Error: ${err.error} - Wystąpił błąd w trakcie logowania, zgłoś problem do administratora.`, this.opcje);
      }
    });
  }

  private copyProfileToUser(profile: any, nr: number) {
    let email = "";
    if (profile.sub.indexOf("google") == 0) {
      email = profile.nickname+'@gmail.com';
    }
    else if (profile.sub.indexOf("auth0") == 0) {
      email = profile.name;
    }
    this.bazaUzytkownikowService.addUser({
      numerUzytkownika: nr,
      user_id: profile.sub,
      zdjecie: profile.picture,
      nazwa: profile.name,
      e_mail: email,
      typ: 'zleceniodawca',
      telefon: '',
      ulica: '',
      nr_bud: '',
      kod: '',
      miejscowosc: '',
    });
  }

  public getProfileAuth() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    return this.profile;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public authenticated() {
    this.profile = localStorage.getItem('profile');
    return Boolean(this.profile);
  }

}
