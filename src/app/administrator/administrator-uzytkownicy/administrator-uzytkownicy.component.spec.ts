import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { AdministratorUzytkownicyComponent } from './administrator-uzytkownicy.component';
import { AdministratorUzytkownikComponent } from '../administrator-uzytkownik/administrator-uzytkownik.component';
import { AdministratorProfilComponent } from '../administrator-profil/administrator-profil.component';
import { ProfilComponent } from '../../profil/profil.component';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from "../../serwisy/auth0/auth.service";

import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { DialogService }     from 'ngx-bootstrap-modal';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

describe('AdministratorUzytkownicyComponent', () => {
  let component: AdministratorUzytkownicyComponent;
  let fixture: ComponentFixture<AdministratorUzytkownicyComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdministratorUzytkownicyComponent,
        AdministratorUzytkownikComponent,
        AdministratorProfilComponent,
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
        DialogService,
        LocationStrategy,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        { provide: AuthService, useValue: mockAuth.getMock()},
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
    fixture = TestBed.createComponent(AdministratorUzytkownicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
