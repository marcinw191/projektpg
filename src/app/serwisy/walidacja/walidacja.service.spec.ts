import { TestBed, inject } from '@angular/core/testing';

import { WalidacjaService } from './walidacja.service';

describe('WalidacjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalidacjaService]
    });
  });

  it('should create', inject([WalidacjaService], (service: WalidacjaService) => {
    expect(service).toBeTruthy();
  }));

  it('powinien sprawdzić poprawność formatu : kod pocztowego', inject([WalidacjaService], (service: WalidacjaService) => {
    expect(service.walidacja('kod', '80-354')).toBe(true);
    expect(service.walidacja('kod', '123456')).toBe(false);
    expect(service.walidacja('kod', 'bc-def')).toBe(false);
  }));

  it('powinien sprawdzić poprawność formatu : adres e-mail', inject([WalidacjaService], (service: WalidacjaService) => {
    expect(service.walidacja('email', 'ala@ala.pl')).toBe(true);
    expect(service.walidacja('email', 'ala@pl.')).toBe(false);
    expect(service.walidacja('email', 'ala.ala.pl')).toBe(false);
  }));

});
