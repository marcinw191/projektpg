import { TestBed, inject } from '@angular/core/testing';
import { AngularFireDatabase }  from 'angularfire2/database';

import { BazaUzytkownikowService } from './bazauzytkownikow.service';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('BazauzytkownikowService', () => {

  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      providers: [
        BazaUzytkownikowService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
      ]
    });
  });

  it('should create', inject([BazaUzytkownikowService], (service: BazaUzytkownikowService) => {
    expect(service).toBeTruthy();
  }));
});
