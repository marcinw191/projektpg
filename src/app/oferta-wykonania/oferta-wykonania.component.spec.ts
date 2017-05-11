import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaWykonaniaComponent } from './oferta-wykonania.component';

describe('OfertaWykonaniaComponent', () => {
  let component: OfertaWykonaniaComponent;
  let fixture: ComponentFixture<OfertaWykonaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaWykonaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaWykonaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
