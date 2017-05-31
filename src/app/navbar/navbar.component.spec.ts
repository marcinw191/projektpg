import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from '../serwisy/auth0/auth.service'
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'
import { NavbarComponent } from './navbar.component';

import { MockAngularFireDatabase } from '../mocks/mock-angularfire';
import { MockAuth } from '../mocks/mock-auth';

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


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ ],
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
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
