import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDodajComponent } from './oferta-dodaj.component';

describe('OfertaDodajComponent', () => {
  let component: OfertaDodajComponent;
  let fixture: ComponentFixture<OfertaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
