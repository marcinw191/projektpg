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
import { AngularFireDatabaseModule }        from 'angularfire2/database';
import { ModalModule }                      from 'ngx-bootstrap/modal';
import { AlertModule }                      from 'ngx-bootstrap';

import { AppComponent }                      from './app.component';
import { NavbarComponent }                   from './navbar/navbar.component';
import { FooterComponent }                   from './footer/footer.component';
import { GaleriaOgloszenComponent }          from './ogloszenia/ogloszenia-galeria/ogloszenia-galeria.component';
import { OgloszenieComponent }               from './ogloszenia/ogloszenie/ogloszenie.component';
import { DodajOgloszenieComponent }          from './ogloszenia/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OgloszenieMiniaturaComponent }      from './ogloszenia/ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OfertaDodajComponent }              from './oferty/oferta-dodaj/oferta-dodaj.component';
import { OfertaWykonaniaComponent }          from './oferty/oferta-wykonania/oferta-wykonania.component';
import { ProfilComponent }                   from './profil/profil.component';
import { ProfilWidokComponent }              from './profil/profil-widok/profil-widok.component';
import { ProfilWidokPrzyciskiComponent }     from './profil/profil-widok-przyciski/profil-widok-przyciski.component';
import { ProfilEdycjaComponent }             from './profil/profil-edycja/profil-edycja.component';
import { ProfilUzytkownikComponent }         from './profil/profil-uzytkownik/profil-uzytkownik.component';
import { OgloszeniaWykazComponent }          from './profil/ogloszenia-wykaz/ogloszenia-wykaz.component';
import { OgloszenieWykazComponent }          from './profil/ogloszenie-wykaz/ogloszenie-wykaz.component';
import { OfertyWykazComponent }              from './profil/oferty-wykaz/oferty-wykaz.component';
import { OfertaWykazComponent }              from './profil/oferta-wykaz/oferta-wykaz.component';
import { LoginTimeComponent }                from './profil/login-time/login-time.component';
import { AdministratorComponent }            from './administrator/administrator.component';
import { AdministratorUzytkownicyComponent } from './administrator/administrator-uzytkownicy/administrator-uzytkownicy.component';
import { AdministratorUzytkownikComponent }  from './administrator/administrator-uzytkownik/administrator-uzytkownik.component';
import { AdministratorOgloszeniaComponent }  from './administrator/administrator-ogloszenia/administrator-ogloszenia.component';
import { AdministratorOgloszenieComponent }  from './administrator/administrator-ogloszenie/administrator-ogloszenie.component';
import { AdministratorOfertyComponent }      from './administrator/administrator-oferty/administrator-oferty.component';
import { AdministratorOfertaComponent }      from './administrator/administrator-oferta/administrator-oferta.component';
import { HomeComponent }                     from './home/home.component';
import { CookielawComponent }                from './cookielaw/cookielaw.component';
import { PolicyComponent }                   from './cookielaw/policy/policy.component';
import { AlertComponent }                    from './alert/alert.component';
import { GoogleMapsComponent }               from './googlemaps/googlemaps.component';
import { OpisDzialaniaComponent }            from './opis-dzialania/opis-dzialania.component';
import { Strona404Component }                from './strona404/strona404.component';

import { routing, appRoutingProviders } from './app.routing';
import { AuthService }                  from './serwisy/auth0/auth.service';
import { BazaUzytkownikowService }      from './serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { BazaOgloszenService }          from './serwisy/firebase-ogloszenia/bazaogloszen.service';
import { BazaOfertService }             from './serwisy/firebase-oferty/bazaofert.service';
import { WalidacjaService }             from './serwisy/walidacja/walidacja.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig(), http, options);
}

export const firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GaleriaOgloszenComponent,
    OgloszenieMiniaturaComponent,
    OgloszenieComponent,
    OfertaWykonaniaComponent,
    OfertaDodajComponent,
    FooterComponent,
    CookielawComponent,
    PolicyComponent,
    DodajOgloszenieComponent,
    AlertComponent,
    GoogleMapsComponent,
    OpisDzialaniaComponent,
    ProfilComponent,
    ProfilWidokComponent,
    ProfilWidokPrzyciskiComponent,
    ProfilEdycjaComponent,
    OgloszeniaWykazComponent,
    OgloszenieWykazComponent,
    ProfilUzytkownikComponent,
    AdministratorComponent,
    AdministratorUzytkownicyComponent,
    AdministratorUzytkownikComponent,
    AdministratorOgloszeniaComponent,
    AdministratorOfertyComponent,
    AdministratorOfertaComponent,
    AdministratorOgloszenieComponent,
    LoginTimeComponent,
    Strona404Component,
    OfertyWykazComponent,
    OfertaWykazComponent,
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
    }),
    AngularFireDatabaseModule,
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
    BazaOgloszenService,
    BazaOfertService,
    WalidacjaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
