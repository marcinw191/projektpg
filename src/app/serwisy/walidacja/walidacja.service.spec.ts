import { TestBed, inject } from '@angular/core/testing';

import { WalidacjaService } from './walidacja.service';

describe('WalidacjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalidacjaService]
    });
  });

  it('should ...', inject([WalidacjaService], (service: WalidacjaService) => {
    expect(service).toBeTruthy();
  }));
});
