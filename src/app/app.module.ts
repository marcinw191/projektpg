import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule }                      from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig }             from 'angular2-jwt';
import { CookieLawModule }                  from 'angular2-cookie-law';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent }                 from './app.component';
import { NavbarComponent }              from './navbar/navbar.component';
import { HomeComponent }                from './home/home.component';
import { GaleriaOgloszenComponent }     from './galeria-ogloszen/galeria-ogloszen.component';
import { OgloszenieMiniaturaComponent } from './ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OgloszenieComponent }          from './ogloszenie/ogloszenie.component';
import { ProfileComponent }             from './profile/profile.component';
import { FooterComponent }              from './footer/footer.component';
import { CookielawComponent }           from './cookielaw/cookielaw.component';
import { PolicyComponent }              from './policy/policy.component';
import { DodajOgloszenieComponent } from './dodaj-ogloszenie/dodaj-ogloszenie.component';
import { AlertComponent } from './alert/alert.component';

import { routing, appRoutingProviders } from './app.routing';
import { AuthService }                  from './auth0/auth.service';
import { OpisDzialaniaComponent } from './opis-dzialania/opis-dzialania.component';

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
    ProfileComponent,
    FooterComponent,
    CookielawComponent,
    PolicyComponent,
    DodajOgloszenieComponent,
    AlertComponent,
    OpisDzialaniaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CookieLawModule,
    BrowserAnimationsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [
    appRoutingProviders,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ],
    },
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
