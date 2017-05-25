import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertModule } from 'ngx-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';


import { HomeComponent }            from '../home/home.component';
import { AdministratorComponent }   from '../administrator/administrator.component';
import { AdministratorUzytkownicyComponent } from '../administrator/administrator-uzytkownicy/administrator-uzytkownicy.component';
import { AdministratorOgloszeniaComponent } from '../administrator/administrator-ogloszenia/administrator-ogloszenia.component';
import { AdministratorOfertyComponent } from '../administrator/administrator-oferty/administrator-oferty.component';
import { ProfilComponent }          from '../profil/profil.component';
import { OgloszenieComponent }      from '../ogloszenia/ogloszenie/ogloszenie.component';
import { PolicyComponent }          from '../cookielaw/policy/policy.component';
import { DodajOgloszenieComponent } from '../ogloszenia/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OpisDzialaniaComponent }   from '../opis-dzialania/opis-dzialania.component';
import { Strona404Component }       from './strona404.component';
import { AlertComponent} from '../alert/alert.component';
import { LoginTimeComponent } from '../profil/login-time/login-time.component';
import { GoogleMapsComponent } from '../googlemaps/googlemaps.component';
import { GaleriaOgloszenComponent } from '../ogloszenia/ogloszenia-galeria/ogloszenia-galeria.component';
import { OgloszenieMiniaturaComponent } from '../ogloszenia/ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OfertaWykonaniaComponent } from '../oferty/oferta-wykonania/oferta-wykonania.component';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};


describe('Strona404Component', () => {
  let component: Strona404Component;
  let fixture: ComponentFixture<Strona404Component>;
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
        GoogleMapsComponent,
        OfertaWykonaniaComponent,
        AdministratorUzytkownicyComponent,
        AdministratorOgloszeniaComponent,
        AdministratorOfertyComponent,
        GoogleMapsComponent
      ],
      imports: [
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
        FormsModule,
        AlertModule,
        ],
      providers: [
        //{provide: Router, useValue: mockRouter },
        //{ provide: ActivatedRoute, useValue: mockRouter },
        //LocationStrategy
        MapsAPILoader
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
    fixture = TestBed.createComponent(Strona404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
