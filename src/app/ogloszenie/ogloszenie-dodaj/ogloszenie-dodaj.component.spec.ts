import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajOgloszenieComponent } from './dodaj-ogloszenie.component';

describe('DodajOgloszenieComponent', () => {
  let component: DodajOgloszenieComponent;
  let fixture: ComponentFixture<DodajOgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajOgloszenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajOgloszenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
