import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AngularFireDatabase} from 'angularfire2/database';
import { Location } from '@angular/common';
import { RouterModule, Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogService } from 'ngx-bootstrap-modal';

import { OgloszenieWykazComponent } from './ogloszenie-wykaz.component';
import { BazaOgloszenService} from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';
import { BazaOfertService} from '../../serwisy/firebase-oferty/bazaofert.service';
import { HomeComponent } from '../../home/home.component';
import { AdministratorComponent } from '../../administrator/administrator.component';
import { AdministratorUzytkownicyComponent } from '../../administrator/administrator-uzytkownicy/administrator-uzytkownicy.component';
import { AdministratorOgloszeniaComponent } from '../../administrator/administrator-ogloszenia/administrator-ogloszenia.component';
import { AdministratorOfertyComponent } from '../../administrator/administrator-oferty/administrator-oferty.component';
import { ProfilComponent } from '../profil.component';
import { OgloszenieComponent } from '../../ogloszenia/ogloszenie/ogloszenie.component';
import { PolicyComponent } from '../../cookielaw/policy/policy.component';
import { DodajOgloszenieComponent } from '../../ogloszenia/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OpisDzialaniaComponent } from '../../opis-dzialania/opis-dzialania.component';
import { Strona404Component } from '../../strona404/strona404.component';
import { AlertComponent} from '../../alert/alert.component';
import { LoginTimeComponent } from '../login-time/login-time.component';
import { GoogleMapsComponent } from '../../googlemaps/googlemaps.component';
import { GaleriaOgloszenComponent } from '../../ogloszenia/ogloszenia-galeria/ogloszenia-galeria.component';
import { OgloszenieMiniaturaComponent } from '../../ogloszenia/ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OfertaWykonaniaComponent } from '../../oferty/oferta-wykonania/oferta-wykonania.component';
import { ProfilWidokComponent } from '../profil-widok/profil-widok.component';
import { ProfilWidokPrzyciskiComponent } from '../profil-widok-przyciski/profil-widok-przyciski.component';
import { ProfilEdycjaComponent } from '../profil-edycja/profil-edycja.component';
import { OgloszeniaWykazComponent } from '../ogloszenia-wykaz/ogloszenia-wykaz.component';
import { OfertyWykazComponent } from '../oferty-wykaz/oferty-wykaz.component';
import { OfertaDodajComponent } from '../../oferty/oferta-dodaj/oferta-dodaj.component';
import { OfertaWykazComponent } from '../oferta-wykaz/oferta-wykaz.component';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';


describe('OgloszenieWykazComponent', () => {
  let component: OgloszenieWykazComponent;
  let fixture: ComponentFixture<OgloszenieWykazComponent>;
  let location, router;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OgloszenieWykazComponent,
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
        RouterModule,
        FormsModule,
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
        AlertModule
      ],
      providers: [
        BazaOgloszenService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        BazaOfertService,
        DialogService,
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
    fixture = TestBed.createComponent(OgloszenieWykazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    setTimeout(()=>{
      expect(component).toBeTruthy();
    }, 5000);
  });

});
