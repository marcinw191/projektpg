import { TestBed, inject } from '@angular/core/testing';

import { BazauzytkownikowService } from './bazauzytkownikow.service';

describe('BazauzytkownikowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BazauzytkownikowService]
    });
  });

  it('should ...', inject([BazauzytkownikowService], (service: BazauzytkownikowService) => {
    expect(service).toBeTruthy();
  }));
});
