import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AngularFireModule }  from 'angularfire2';

import { AuthService } from '../serwisy/auth0/auth.service';
import { ProfilComponent } from './profil.component';
import { LoginTimeComponent } from './login-time/login-time.component';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'
import {ProfilWidokComponent} from "./profil-widok/profil-widok.component";
import {ProfilWidokPrzyciskiComponent} from "./profil-widok-przyciski/profil-widok-przyciski.component";
import {ProfilEdycjaComponent} from "./profil-edycja/profil-edycja.component";
import {OgloszeniaWykazComponent} from "./ogloszenia-wykaz/ogloszenia-wykaz.component";
import {OfertyWykazComponent} from "./oferty-wykaz/oferty-wykaz.component";
import {AdministratorComponent} from "../administrator/administrator.component";
import {OgloszenieWykazComponent} from "./ogloszenie-wykaz/ogloszenie-wykaz.component";
import {OfertaWykazComponent} from "./oferta-wykaz/oferta-wykaz.component";
import {AdministratorUzytkownicyComponent} from "../administrator/administrator-uzytkownicy/administrator-uzytkownicy.component";
import {AdministratorOgloszeniaComponent} from "../administrator/administrator-ogloszenia/administrator-ogloszenia.component";
import {AdministratorOfertyComponent} from "../administrator/administrator-oferty/administrator-oferty.component";
import {AdministratorUzytkownikComponent} from "../administrator/administrator-uzytkownik/administrator-uzytkownik.component";
import {AdministratorOgloszenieComponent} from "../administrator/administrator-ogloszenie/administrator-ogloszenie.component";
import {AdministratorOfertaComponent} from "../administrator/administrator-oferta/administrator-oferta.component";
import {ProfilUzytkownikComponent} from "./profil-uzytkownik/profil-uzytkownik.component";

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfilComponent,
        LoginTimeComponent,
        ProfilWidokComponent,
        ProfilWidokPrzyciskiComponent,
        ProfilEdycjaComponent,
        OgloszeniaWykazComponent,
        OfertyWykazComponent,
        AdministratorComponent,
        OgloszenieWykazComponent,
        OfertaWykazComponent,
        AdministratorUzytkownicyComponent,
        AdministratorOgloszeniaComponent,
        AdministratorOfertyComponent,
        AdministratorUzytkownikComponent,
        AdministratorOgloszenieComponent,
        AdministratorOfertaComponent,
        ProfilUzytkownikComponent
      ],
      imports: [ FormsModule, AngularFireModule.initializeApp(firebaseConfig), RouterModule  ],
      providers: [
        AuthService,
        {provide: Router, useValue: mockRouter },
        BazaUzytkownikowService,
        AngularFireModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
