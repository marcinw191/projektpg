import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, OpaqueToken } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { AngularFireModule }  from 'angularfire2';
import { AngularFireDatabase }  from 'angularfire2/database';
import { MapsAPILoader } from 'angular2-google-maps/core';
import {Observable} from 'rxjs/Rx';

import { AuthService } from '../../serwisy/auth0/auth.service';
import { OgloszenieComponent } from './ogloszenie.component';
import { GoogleMapsComponent } from '../../googlemaps/googlemaps.component'
import { OfertaWykonaniaComponent } from '../../oferty/oferta-wykonania/oferta-wykonania.component'
import { AlertComponent } from '../../alert/alert.component'
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'



class mapsAPILoader{
  public load() {
    return new Promise((resolve, reject) => { });
  }
}

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
  snapshot: {
    params: { id: 1}
  }
};

let mockAuth = {
  authenticated: function() { return true; },
  getProfileAuth: function() {
    return { user_id: "google-oauth2|114567725685047947770" }
  }
};

let user = {
  nazwa: "Bartlomiej Kornowski",
  e_mail: "bart.korn@wp.pl",
  typ: "zleceniodawca",
  ulica: "Szczecińska",
  nr_bud: "12",
  miejscowosc: "Gdańsk",
  kod: "80-392",
  zdjecie: "",
  $key: "abc",
  user_id: "google-oauth2|114567725685047947770",
  telefon: "12345678"
};

let ogloszenie = {
  tytul: "Kuchnia do remontu",
  telefon: "1234567",
  opis: "Kuchnia do kapitalnego remontu",
  ulica: "Fiołkowa",
  ulica_numer: "23",
  miasto: "Warszawa",
  dataPublikacji: "2015-12-12T12:23:12.12",
  koniecLicytacji: "2015-12-24",
  maxCena: 2000,
  zlecajacy: "google-oauth2|114567725685047947770",
  czasWykonania: 5,
  pliki: []
};

let mockBazaUzytkownikow = {
  getUserById: function(id) {
    return Observable.of([user]);
  }
};

let mockFirebase = {
  database: {
    list: function(data, params) {
      if(data == "/ogloszenia")
      {
        return Observable.of([ogloszenie])
      }
      if(data == "/oferty")
      {
       return Observable.of([

       ])
      }
    }
  }
};

describe('OgloszenieComponent', () => {
  let component: OgloszenieComponent;
  let fixture: ComponentFixture<OgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszenieComponent, GoogleMapsComponent, OfertaWykonaniaComponent, AlertComponent ],
      imports: [ FormsModule, RouterModule, AlertModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRouter },
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireModule, useValue: mockFirebase },
        { provide: BazaUzytkownikowService, useValue: mockBazaUzytkownikow },
        { provide: AuthService, useValue: mockAuth },
        { provide: MapsAPILoader, useClass: mapsAPILoader }
      ],
      schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('powinien stworzyć obiekt z ustawionymi polami', () => {
    expect(component.zdjecie0).toEqual("");
    expect(component.zdjecie1).toEqual("");
    expect(component.zdjecie2).toEqual("");
    expect(component.zdjecie3).toEqual("");
    expect(component.zdjecie4).toEqual("");
    expect(component.zlecajacy).toBeDefined();
    expect(component.oferent).toBeDefined();
    // expect(component.oferta).toEqual({});
    // expect(component.oferta_dodana).toBe(false);

  });

  // it('powinien wyczyścić wprowadzaną ofertę', () => {
  //   component.wyczyscOferte();
  //   expect(component.oferta).toEqual({});
  // });

  it('powinien załadować ogłoszenie', () => {
    component.ngOnInit();
    setTimeout(function(){
      expect(component.tytul).toEqual(ogloszenie.tytul);
      expect(component.istnieje).toEqual(true);
      expect(component.telefon).toEqual(ogloszenie.telefon);
      expect(component.opis).toEqual(ogloszenie.opis);
      expect(component.ulica).toEqual(ogloszenie.ulica);
      expect(component.ulica_numer).toEqual(ogloszenie.ulica_numer);
      expect(component.miasto).toEqual(ogloszenie.miasto);
      expect(component.dataPublikacji).toEqual(ogloszenie.dataPublikacji);
      expect(component.koniecLicytacji).toEqual(ogloszenie.koniecLicytacji);
      expect(component.maxCena).toEqual(ogloszenie.maxCena);
      expect(component.user_id).toEqual(ogloszenie.zlecajacy);
      expect(component.czasWykonania).toEqual(ogloszenie.czasWykonania);
    }, 3000);

  });

});
