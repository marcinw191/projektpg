import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogService }     from 'ngx-bootstrap-modal';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { AdministratorUzytkownikComponent } from './administrator-uzytkownik.component';
import { AdministratorProfilComponent } from '../administrator-profil/administrator-profil.component';
import { ProfilComponent } from '../../profil/profil.component';
import { AuthService } from '../../serwisy/auth0/auth.service';

import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { MockAuth } from '../../mocks/mock-auth';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

describe('AdministratorUzytkownikComponent', () => {
  let component: AdministratorUzytkownikComponent;
  let fixture: ComponentFixture<AdministratorUzytkownikComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
        LocationStrategy,
        DialogService,
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock() },
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
    fixture = TestBed.createComponent(AdministratorUzytkownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
