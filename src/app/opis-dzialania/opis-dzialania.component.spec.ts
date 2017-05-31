import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AngularFireDatabase }  from 'angularfire2/database';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { OpisDzialaniaComponent } from './opis-dzialania.component';
import { AuthService } from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { HomeComponent }            from '../home/home.component';
import { AdministratorComponent }   from '../administrator/administrator.component';
import { ProfilComponent }          from '../profil/profil.component';
import { OgloszenieComponent }      from '../ogloszenia/ogloszenie/ogloszenie.component';
import { PolicyComponent }          from '../cookielaw/policy/policy.component';
import { DodajOgloszenieComponent } from '../ogloszenia/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { Strona404Component }       from '../strona404/strona404.component';
import { AlertComponent} from '../alert/alert.component';
import { LoginTimeComponent } from '../profil/login-time/login-time.component';
import { GoogleMapsComponent } from '../googlemaps/googlemaps.component';

import { MockAuth } from '../mocks/mock-auth';
import { MockAngularFireDatabase } from '../mocks/mock-angularfire';
import {OgloszenieMiniaturaComponent} from "../ogloszenia/ogloszenie-miniatura/ogloszenie-miniatura.component";
import {GaleriaOgloszenComponent} from "../ogloszenia/ogloszenia-galeria/ogloszenia-galeria.component";
import {FormsModule} from "@angular/forms";
import {ProfilWidokComponent} from "../profil/profil-widok/profil-widok.component";
import {ProfilWidokPrzyciskiComponent} from "../profil/profil-widok-przyciski/profil-widok-przyciski.component";
import {ProfilEdycjaComponent} from "../profil/profil-edycja/profil-edycja.component";
import {OgloszeniaWykazComponent} from "../profil/ogloszenia-wykaz/ogloszenia-wykaz.component";
import {OfertyWykazComponent} from "../profil/oferty-wykaz/oferty-wykaz.component";
import {OfertaWykonaniaComponent} from "../oferty/oferta-wykonania/oferta-wykonania.component";
import {OfertaDodajComponent} from "../oferty/oferta-dodaj/oferta-dodaj.component";
import {AdministratorUzytkownicyComponent} from "../administrator/administrator-uzytkownicy/administrator-uzytkownicy.component";
import {AdministratorOfertyComponent} from "../administrator/administrator-oferty/administrator-oferty.component";
import {AdministratorOgloszeniaComponent} from "../administrator/administrator-ogloszenia/administrator-ogloszenia.component";
import {AdministratorOfertaComponent} from "../administrator/administrator-oferta/administrator-oferta.component";
import {AdministratorOgloszenieComponent} from "../administrator/administrator-ogloszenie/administrator-ogloszenie.component";
import {AlertModule} from "ngx-bootstrap";


describe('OpisDzialaniaComponent', () => {
  let component: OpisDzialaniaComponent;
  let fixture: ComponentFixture<OpisDzialaniaComponent>;
  let location, router;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OpisDzialaniaComponent,
        GaleriaOgloszenComponent,
        OgloszenieMiniaturaComponent,
        DodajOgloszenieComponent,
        OpisDzialaniaComponent,
        HomeComponent,
        ProfilComponent,
        OgloszenieComponent,
        PolicyComponent,
        AdministratorComponent,
        Strona404Component,
        AlertComponent,
        LoginTimeComponent,
        GoogleMapsComponent,
        ProfilWidokComponent,
        ProfilWidokPrzyciskiComponent,
        ProfilEdycjaComponent,
        OgloszeniaWykazComponent,
        OfertyWykazComponent,
        OfertaWykonaniaComponent,
        OfertaDodajComponent,
        AdministratorUzytkownicyComponent,
        AdministratorOfertyComponent,
        AdministratorOgloszeniaComponent,
        AdministratorOfertaComponent,
        AdministratorOgloszenieComponent,
        GoogleMapsComponent
      ],
      imports: [
        FormsModule,
        AlertModule,
        RouterTestingModule.withRoutes([
          { path:'',                     component: GaleriaOgloszenComponent},
          { path:'zlecenie',             component: GaleriaOgloszenComponent },
          { path:'dodaj_ogloszenie',     component: DodajOgloszenieComponent },
          { path:'pomoc',                component: OpisDzialaniaComponent},
          { path:'kontakt',              component: HomeComponent },
          { path:'profil',               component: ProfilComponent },
          { path:'ogloszenie/:id',       component: OgloszenieComponent },
          { path:'polityka_prywatnosci', component: PolicyComponent },
          { path:'administrator',        component: AdministratorComponent },
          { path:'**',                   component: Strona404Component }
        ]),
        ],
      providers: [
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        BazaUzytkownikowService
      ],
      schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisDzialaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
