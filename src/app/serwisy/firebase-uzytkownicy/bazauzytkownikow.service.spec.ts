import { TestBed, inject } from '@angular/core/testing';
import { AngularFireModule }  from 'angularfire2';

import { BazaUzytkownikowService } from './bazauzytkownikow.service';

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('BazauzytkownikowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        BazaUzytkownikowService,
        AngularFireModule
      ]
    });
  });

  it('should create', inject([BazaUzytkownikowService], (service: BazaUzytkownikowService) => {
    expect(service).toBeTruthy();
  }));
});
