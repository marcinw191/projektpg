import { TestBed, inject } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router'

import { AuthService } from './auth.service';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,  {provide: Router, useValue: mockRouter }]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
