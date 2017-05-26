import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilUzytkownikComponent } from '../../profil/profil-uzytkownik/profil-uzytkownik.component';
import 'firebase/storage';
import * as firebase from 'firebase/app'; // for typings
import { AdministratorOfertaComponent } from './administrator-oferta.component';
import {FormsModule} from "@angular/forms";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";
import {Observable} from "rxjs";

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

let mockDatabase = {

  app: {
    database: function() {
      return {
        ref: ""
      }
    }
  },
  list: function(param){
    return Observable.of([{
      nazwa: ""
    }]);
  },
  object: function(param){
    return Observable.of({});
  }
};


describe('AdministratorOfertaComponent', () => {
  let component: AdministratorOfertaComponent;
  let fixture: ComponentFixture<AdministratorOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOfertaComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [ BazaOfertService, {provide: AngularFireDatabase, useValue: mockDatabase}, BazaUzytkownikowService, FirebaseApp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOfertaComponent);
    component = fixture.componentInstance;
    component.oferta = { oferent: "123"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
