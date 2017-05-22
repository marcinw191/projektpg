import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { LocationStrategy } from '@angular/common';

import { Strona404Component } from './strona404.component';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};


describe('Strona404Component', () => {
  let component: Strona404Component;
  let fixture: ComponentFixture<Strona404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Strona404Component ],
      imports: [ RouterModule ],
      providers: [
        {provide: Router, useValue: mockRouter },
        {provide: ActivatedRoute, useValue: mockRouter },
        LocationStrategy
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Strona404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
