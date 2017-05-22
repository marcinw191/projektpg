import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../serwisy/auth0/auth.service';
import { Router } from '@angular/router';
import { AngularFireModule, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from 'rxjs/Rx';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { AdministratorUzytkownikComponent } from './administrator-uzytkownik.component';

class MockBazaUzytkownikowService  {
  public getUserDetails(key) {
    return Observable.of({
      blokada: "nie",
      e_mail: "someone@gmail.com"
    })
  }
}

class MockAuthService {
  public getProfileAuth(){
    return Observable.of({
      email: "someone@gmail.com"
    })
  }
}

let mockRouter = {
  navigate: jasmine.createSpy('navigate')
};
let Auth0Lock: any = require('auth0-lock').default;

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('AdministratorUzytkownikComponent', () => {
  let component: AdministratorUzytkownikComponent;
  let fixture: ComponentFixture<AdministratorUzytkownikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUzytkownikComponent ],
      imports: [ FormsModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        { provide: AuthService, useClass: MockAuthService},
        { provide: Router, useValue: mockRouter },
        { provide: BazaUzytkownikowService, useClass: MockBazaUzytkownikowService },
        AngularFireModule,
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


