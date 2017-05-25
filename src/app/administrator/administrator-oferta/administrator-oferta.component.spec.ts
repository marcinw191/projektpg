import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';

import { ProfilUzytkownikComponent } from '../../profil/profil-uzytkownik/profil-uzytkownik.component';

import { AdministratorOfertaComponent } from './administrator-oferta.component';
import {FormsModule} from "@angular/forms";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};


describe('AdministratorOfertaComponent', () => {
  let component: AdministratorOfertaComponent;
  let fixture: ComponentFixture<AdministratorOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOfertaComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [ BazaOfertService, AngularFireModule, BazaUzytkownikowService ]
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
