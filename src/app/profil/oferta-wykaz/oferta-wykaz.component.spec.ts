import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { OfertaWykazComponent } from './oferta-wykaz.component';
import {RouterModule, Router, ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";
import {AngularFireModule} from "angularfire2";
import {BazaOgloszenService} from "../../serwisy/firebase-ogloszenia/bazaogloszen.service";
import { HomeComponent }            from '../../home/home.component';
import { AdministratorComponent }   from '../../administrator/administrator.component';
import { AdministratorUzytkownicyComponent } from '../../administrator/administrator-uzytkownicy/administrator-uzytkownicy.component';
import { AdministratorOgloszeniaComponent } from '../../administrator/administrator-ogloszenia/administrator-ogloszenia.component';
import { AdministratorOfertyComponent } from '../../administrator/administrator-oferty/administrator-oferty.component';
import { ProfilComponent }          from '../../profil/profil.component';
import { OgloszenieComponent }      from '../../ogloszenia/ogloszenie/ogloszenie.component';
import { PolicyComponent }          from '../../cookielaw/policy/policy.component';
import { DodajOgloszenieComponent } from '../../ogloszenia/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OpisDzialaniaComponent }   from '../../opis-dzialania/opis-dzialania.component';
import { Strona404Component }       from '../../strona404/strona404.component';
import { AlertComponent} from '../../alert/alert.component';
import { LoginTimeComponent } from '../../profil/login-time/login-time.component';
import { GoogleMapsComponent } from '../../googlemaps/googlemaps.component';
import { GaleriaOgloszenComponent } from '../../ogloszenia/ogloszenia-galeria/ogloszenia-galeria.component';
import { OgloszenieMiniaturaComponent } from '../../ogloszenia/ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OfertaWykonaniaComponent } from '../../oferty/oferta-wykonania/oferta-wykonania.component';
import {ProfilWidokComponent} from "../profil-widok/profil-widok.component";
import {ProfilWidokPrzyciskiComponent} from "../profil-widok-przyciski/profil-widok-przyciski.component";
import {ProfilEdycjaComponent} from "../profil-edycja/profil-edycja.component";
import {OgloszeniaWykazComponent} from "../ogloszenia-wykaz/ogloszenia-wykaz.component";
import {OfertyWykazComponent} from "../oferty-wykaz/oferty-wykaz.component";
import {OfertaDodajComponent} from "../../oferty/oferta-dodaj/oferta-dodaj.component";
import {AlertModule} from "ngx-bootstrap";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('OfertaWykazComponent', () => {
  let component: OfertaWykazComponent;
  let fixture: ComponentFixture<OfertaWykazComponent>;
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OfertaWykazComponent,
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
        OfertaWykonaniaComponent,
        AdministratorUzytkownicyComponent,
        AdministratorOgloszeniaComponent,
        AdministratorOfertyComponent,
        GoogleMapsComponent,
        ProfilWidokComponent,
        ProfilWidokPrzyciskiComponent,
        ProfilEdycjaComponent,
        OgloszeniaWykazComponent,
        OfertyWykazComponent,
        OfertaDodajComponent,
        AlertComponent,
      ],
      imports: [
        AlertModule,
        RouterModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
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
        ])
      ],
      providers: [
        BazaUzytkownikowService,
        BazaOfertService,
        BazaOgloszenService,
        AngularFireModule,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaWykazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
