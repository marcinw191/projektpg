import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule }  from 'angularfire2';
import { AlertModule } from 'ngx-bootstrap';

import { GaleriaOgloszenComponent } from './ogloszenia-galeria.component';
import { OgloszenieMiniaturaComponent } from '../ogloszenie/ogloszenie-miniatura/ogloszenie-miniatura.component';
import { AuthService } from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

import { HomeComponent }            from '../home/home.component';
import { AdministratorComponent }   from '../administrator/administrator.component';
import { ProfilComponent }          from '../profil/profil.component';
import { OgloszenieComponent }      from '../ogloszenie/ogloszenie.component';
import { PolicyComponent }          from '../cookielaw/policy/policy.component';
import { DodajOgloszenieComponent } from '../ogloszenie/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OpisDzialaniaComponent }   from '../opis-dzialania/opis-dzialania.component';
import { Strona404Component }       from '../strona404/strona404.component';
import { AlertComponent} from '../alert/alert.component';
import { LoginTimeComponent } from '../profil/login-time/login-time.component';
import { GoogleMapsComponent } from '../googlemaps/googlemaps.component';

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

describe('GaleriaOgloszenComponent', () => {
  let component: GaleriaOgloszenComponent;
  let fixture: ComponentFixture<GaleriaOgloszenComponent>;
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
        GoogleMapsComponent
      ],
      imports: [
        FormsModule,
        AlertModule,
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
      ]) ],
      providers: [
        AuthService,
        AngularFireModule,
        BazaUzytkownikowService,
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
    fixture = TestBed.createComponent(GaleriaOgloszenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('powinien zmienic orientacje', () => {
    component.zmienOrientacje("galeria");
    expect(component.orientacja).toEqual("galeria");
    component.zmienOrientacje("lista");
    expect(component.orientacja).toEqual("lista");
  });

  it('powinien wyczyscic pole wyszukiwania', () => {
    component.fraza = "remont";
    component.szukaj();
    component.wyczyscSzukanie();
    expect(component.fraza).toEqual("");
    expect(component.pofiltrowane).toEqual(false);
    expect(component.miniatury).toEqual(component.miniaturyBezFiltrowania);
  });

  it('powinien wyszukac 5 elementow', () => {
    component.fraza = "remont";
    component.szukaj();
    expect(component.fraza).toEqual("remont");
    expect(component.pofiltrowane).toEqual(true);
    expect(component.miniatury.length).toEqual(5);
  });

});

