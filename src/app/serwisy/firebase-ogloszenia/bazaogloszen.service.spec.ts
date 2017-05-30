import { TestBed, inject } from '@angular/core/testing';
import { AngularFireDatabase }  from 'angularfire2/database';

import { BazaOgloszenService } from './bazaogloszen.service';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('BazaOgloszenService', () => {

  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      providers: [
        BazaOgloszenService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
      ]
    });
  });

  it('should ...', inject([BazaOgloszenService], (service: BazaOgloszenService) => {
    expect(service).toBeTruthy();
  }));
});
