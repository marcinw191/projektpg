import { TestBed, inject } from '@angular/core/testing';
import { AngularFireDatabase }  from 'angularfire2/database';

import { BazaOfertService } from './bazaofert.service';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('BazaOfertService', () => {

  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  ],
      providers: [
        BazaOfertService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
      ]
    });
  });

  it('should ...', inject([BazaOfertService], (service: BazaOfertService) => {
    expect(service).toBeTruthy();
  }));
});
