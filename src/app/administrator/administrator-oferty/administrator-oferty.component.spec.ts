import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdministratorOfertyComponent } from './administrator-oferty.component';
import {AdministratorOfertaComponent} from "../administrator-oferta/administrator-oferta.component";
import {ProfilUzytkownikComponent} from "../../profil/profil-uzytkownik/profil-uzytkownik.component";
import {FormsModule} from "@angular/forms";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";

import { mockAngularFireDatabase } from '../../mocks/mock-angularfire';
import {Observable} from "rxjs";

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

let mockFirebase = {

  list: function(table, params) {
    if(table == '/oferty')
    {
      return Observable.of([
        {
          cena: 400,
          dataPublikacji: "2017-05-11T18:34:01.485Z",
          numerOgloszenia: "2",
          oferent: "google-oauth2|114567725685047947770",
          telefon: "502876123",
          wiadomosc: "Chętnie obejrzę kuchnię i dogadamy się co do zakresu robót. Proszę o kontakt - mam wolne terminy."
        }
      ])
    }
  }

};

describe('AdministratorOfertyComponent', () => {
  let component: AdministratorOfertyComponent;
  let fixture: ComponentFixture<AdministratorOfertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOfertyComponent, AdministratorOfertaComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        BazaOfertService,
        { provide: AngularFireDatabase, useValue: mockFirebase}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOfertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
