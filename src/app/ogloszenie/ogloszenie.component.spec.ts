import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { AngularFireModule }  from 'angularfire2';
import { MapsAPILoader } from 'angular2-google-maps/core';
import {Observable} from 'rxjs/Rx';

import { AuthService } from '../serwisy/auth0/auth.service';
import { OgloszenieComponent } from './ogloszenie.component';
import { GoogleMapsComponent } from '../googlemaps/googlemaps.component'
import { OfertaWykonaniaComponent } from '../oferta-wykonania/oferta-wykonania.component'
import { AlertComponent } from '../alert/alert.component'
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

class mapsAPILoader{
  public load() {
    return new Promise((resolve, reject) => { });
  }
}

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
  snapshot: {
    params: { id: 1}
  }
};

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('OgloszenieComponent', () => {
  let component: OgloszenieComponent;
  let fixture: ComponentFixture<OgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszenieComponent, GoogleMapsComponent, OfertaWykonaniaComponent, AlertComponent ],
      imports: [ FormsModule, RouterModule, AlertModule, AngularFireModule.initializeApp(firebaseConfig)  ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRouter },
        { provide: Router, useValue: mockRouter },
        AngularFireModule,
        BazaUzytkownikowService,
        AuthService,
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
    expect(component.oferta).toEqual({});
    expect(component.oferta_dodana).toBe(false);

  });

});
