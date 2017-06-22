import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from 'ngx-bootstrap-modal';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from '../../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { AdministratorProfilComponent } from './administrator-profil.component';
import { ProfilComponent } from '../../profil/profil.component';
import { ProfilWidokComponent } from '../../profil/profil-widok/profil-widok.component';
import { ProfilEdycjaComponent } from '../../profil/profil-edycja/profil-edycja.component';
import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
  snapshot: {
    params: { id: 1}
  }
};

describe('AdministratorProfilComponent', () => {
  let component: AdministratorProfilComponent;
  let fixture: ComponentFixture<AdministratorProfilComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdministratorProfilComponent,
        ProfilComponent,
        ProfilWidokComponent,
        ProfilEdycjaComponent
      ],
      imports: [
        FormsModule,
      ],
      providers: [
        BazaUzytkownikowService,
        DialogService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: Router, useValue: mockRouter},
        { provide: ActivatedRoute, useValue: mockRouter },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
