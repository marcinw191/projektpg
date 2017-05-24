import { TestBed, inject } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router'
import { AngularFireModule }  from 'angularfire2';

import { AuthService } from './auth.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};


describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {provide: Router, useValue: mockRouter },
        AngularFireModule,
        BazaUzytkownikowService
        ],
      imports: [ AngularFireModule.initializeApp(firebaseConfig) ],
    });
  });

  it('should create', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
