import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase }  from 'angularfire2/database';
import { AlertModule } from 'ngx-bootstrap';

import { GaleriaOgloszenComponent } from './ogloszenia-galeria.component';
import { OgloszenieMiniaturaComponent } from '../ogloszenie-miniatura/ogloszenie-miniatura.component';
import { AuthService } from '../../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

import { HomeComponent }            from '../../home/home.component';
import { AdministratorComponent }   from '../../administrator/administrator.component';
import { ProfilComponent }          from '../../profil/profil.component';
import { OgloszenieComponent }      from '../ogloszenie/ogloszenie.component';
import { PolicyComponent }          from '../../cookielaw/policy/policy.component';
import { DodajOgloszenieComponent } from '../ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OpisDzialaniaComponent }   from '../../opis-dzialania/opis-dzialania.component';
import { Strona404Component }       from '../../strona404/strona404.component';
import { AlertComponent} from '../../alert/alert.component';
import { LoginTimeComponent } from '../../profil/login-time/login-time.component';
import { GoogleMapsComponent } from '../../googlemaps/googlemaps.component';

import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { MockStorge } from '../../mocks/mock-storage';

describe('GaleriaOgloszenComponent', () => {
  let component: GaleriaOgloszenComponent;
  let fixture: ComponentFixture<GaleriaOgloszenComponent>;
  let location, router;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();
  let mockStorage = new MockStorge();

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
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        { provide: AuthService, useValue: mockAuth.getMock()},
        BazaUzytkownikowService,
        { provide: FirebaseApp, useValue: mockStorage.getMock()}
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

  it('powinien wyszukac 1 element', () => {
    component.fraza = "remont";
    component.szukaj();
    expect(component.fraza).toEqual("remont");
    expect(component.pofiltrowane).toEqual(true);
    expect(component.miniatury.length).toEqual(1);
  });

});

