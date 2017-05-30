import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../serwisy/auth0/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { AdministratorUzytkownikComponent } from './administrator-uzytkownik.component';

import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { MockAuth } from '../../mocks/mock-auth';

let mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('AdministratorUzytkownikComponent', () => {
  let component: AdministratorUzytkownikComponent;
  let fixture: ComponentFixture<AdministratorUzytkownikComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock() },
        BazaUzytkownikowService
      ]
    })
    .compileComponents();
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


