import { TestBed, inject } from '@angular/core/testing';
import { AngularFireModule }  from 'angularfire2';

import { BazaOfertService } from './bazaofert.service';

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('BazaOfertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        BazaOfertService,
        AngularFireModule
      ]
    });
  });

  it('should ...', inject([BazaOfertService], (service: BazaOfertService) => {
    expect(service).toBeTruthy();
  }));
});
