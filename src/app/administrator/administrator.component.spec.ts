import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterTestingModule } from '@angular/router/testing';

import { AdministratorComponent } from './administrator.component';
import { AdministratorUzytkownicyComponent } from './administrator-uzytkownicy/administrator-uzytkownicy.component';
import { AdministratorOgloszeniaComponent } from './administrator-ogloszenia/administrator-ogloszenia.component';
import { AdministratorOfertyComponent } from './administrator-oferty/administrator-oferty.component';
import { AdministratorUzytkownikComponent } from './administrator-uzytkownik/administrator-uzytkownik.component';
import { AdministratorProfilComponent } from './administrator-profil/administrator-profil.component';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'
import { AdministratorOgloszenieComponent } from "./administrator-ogloszenie/administrator-ogloszenie.component";
import { AdministratorOfertaComponent } from "./administrator-oferta/administrator-oferta.component";
import { ProfilUzytkownikComponent } from "../profil/profil-uzytkownik/profil-uzytkownik.component";
import { ProfilComponent } from '../profil/profil.component';
import { MockAngularFireDatabase } from "../mocks/mock-angularfire";
import { MockAuth } from '../mocks/mock-auth';
import { AuthService } from '../serwisy/auth0/auth.service';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

describe('AdministratorComponent', () => {
  let component: AdministratorComponent;
  let fixture: ComponentFixture<AdministratorComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdministratorComponent,
        AdministratorUzytkownikComponent,
        AdministratorUzytkownicyComponent,
        AdministratorOgloszeniaComponent,
        AdministratorOfertyComponent,
        AdministratorOgloszenieComponent,
        AdministratorOfertaComponent,
        AdministratorProfilComponent,
        ProfilUzytkownikComponent,
        ProfilComponent,
      ],
      imports: [
        FormsModule,
        RouterModule,
        RouterTestingModule.withRoutes([
          { path:'profil',     component: ProfilComponent },
          { path:'profil/:id', component: AdministratorProfilComponent },
        ]),
      ],
      providers: [
        BazaUzytkownikowService,
        LocationStrategy,
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        { provide: ActivatedRoute, useValue: mockRouter },
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
    fixture = TestBed.createComponent(AdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
