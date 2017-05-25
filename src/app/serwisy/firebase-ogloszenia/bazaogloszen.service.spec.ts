import { TestBed, inject } from '@angular/core/testing';
import { AngularFireModule }  from 'angularfire2';

import { BazaOgloszenService } from './bazaogloszen.service';

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('BazaOgloszenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        BazaOgloszenService,
        AngularFireModule
      ]
    });
  });

  it('should ...', inject([BazaOgloszenService], (service: BazaOgloszenService) => {
    expect(service).toBeTruthy();
  }));
});
