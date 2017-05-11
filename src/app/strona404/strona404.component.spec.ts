import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Strona404Component } from './strona404.component';

describe('Strona404Component', () => {
  let component: Strona404Component;
  let fixture: ComponentFixture<Strona404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Strona404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Strona404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
