import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule }  from 'angularfire2';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

import { OfertaWykonaniaComponent } from './oferta-wykonania.component';

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('OfertaWykonaniaComponent', () => {
  let component: OfertaWykonaniaComponent;
  let fixture: ComponentFixture<OfertaWykonaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaWykonaniaComponent ],
      imports: [ AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [ BazaUzytkownikowService, AngularFireModule ],
      schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaWykonaniaComponent);
    component = fixture.componentInstance;
    component.oferta = { cena: "120PLN" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
