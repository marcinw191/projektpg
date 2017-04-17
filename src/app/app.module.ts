import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OgloszenieMiniaturaComponent } from './ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OgloszenieComponent } from './ogloszenie/ogloszenie.component';
import { GaleriaOgloszenComponent } from './galeria-ogloszen/galeria-ogloszen.component';
import { BazaDanychComponent } from './baza-danych/baza-danych.component';
import { DodajOgloszenieComponent } from './dodaj-ogloszenie/dodaj-ogloszenie.component';

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
    FooterComponent,
    OgloszenieMiniaturaComponent,
    OgloszenieComponent,
    GaleriaOgloszenComponent,
    BazaDanychComponent,
    DodajOgloszenieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'ogloszenie',
        component: OgloszenieComponent
      },
      {
        path: 'ogloszenia',
        component: GaleriaOgloszenComponent
      },
      {
        path: 'baza',
        component: BazaDanychComponent
      },
      {
        path: '',
        redirectTo: '/ogloszenia',
        pathMatch: 'full'
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
