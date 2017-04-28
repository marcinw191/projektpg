import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { AuthHttp, AuthConfig }             from 'angular2-jwt';
import { CookieLawModule }                  from 'angular2-cookie-law';
import { AgmCoreModule }                    from 'angular2-google-maps/core';
import { AngularFireModule }                from 'angularfire2';
import { ModalModule }                      from 'ngx-bootstrap/modal';
import { AlertModule }                      from 'ngx-bootstrap';

import { AppComponent }                 from './app.component';
import { NavbarComponent }              from './navbar/navbar.component';
import { FooterComponent }              from './footer/footer.component';
import { HomeComponent }                from './home/home.component';
import { GaleriaOgloszenComponent }     from './galeria-ogloszen/galeria-ogloszen.component';
import { OgloszenieMiniaturaComponent } from './ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OgloszenieComponent }          from './ogloszenie/ogloszenie.component';
import { ProfileComponent }             from './profile/profile.component';
import { CookielawComponent }           from './cookielaw/cookielaw.component';
import { PolicyComponent }              from './policy/policy.component';
import { DodajOgloszenieComponent }     from './dodaj-ogloszenie/dodaj-ogloszenie.component';
import { AlertComponent }               from './alert/alert.component';
import { GoogleMapsComponent }          from './googlemaps/googlemaps.component';
import { OpisDzialaniaComponent }       from './opis-dzialania/opis-dzialania.component';
import { DodajUzytkownikaComponent }    from './dodaj-uzytkownika/dodajuzytkownika.component';
import { SzukajUzytkownikaComponent }   from './szukaj-uzytkownika/szukajuzytkownika.component';
import { DaneUzytkownikaComponent }     from './dane-uzytkownika/daneuzytkownika.component';

import { routing, appRoutingProviders } from './app.routing';
import { AuthService }                  from './serwisy/auth0/auth.service';
import { BazaUzytkownikowService }      from './serwisy/bazauzytkownikow.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig(), http, options);
}

export const firebaseConfig = {
  apiKey: 'AIzaSyA9WXFvzvefMSWpBcnHIU2TaF7h6f9rWU0',
  authDomain: 'kaskada-165611.firebaseapp.com',
  databaseURL: 'https://kaskada-165611.firebaseio.com',
  projectId: 'kaskada-165611',
  storageBucket: 'kaskada-165611.appspot.com',
  messagingSenderId: '44558647394'
  // apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  // authDomain: "kaskada-5ebd3.firebaseapp.com",
  // databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  // projectId: "kaskada-5ebd3",
  // storageBucket: "kaskada-5ebd3.appspot.com",
  // messagingSenderId: "846477355550"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GaleriaOgloszenComponent,
    OgloszenieMiniaturaComponent,
    OgloszenieComponent,
    ProfileComponent,
    FooterComponent,
    CookielawComponent,
    PolicyComponent,
    DodajOgloszenieComponent,
    AlertComponent,
    GoogleMapsComponent,
    OpisDzialaniaComponent,
    DodajUzytkownikaComponent,
    SzukajUzytkownikaComponent,
    DaneUzytkownikaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    CookieLawModule,
    BrowserAnimationsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU",
    })
  ],
  providers: [
    appRoutingProviders,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ],
    },
    AuthService,
    BazaUzytkownikowService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
