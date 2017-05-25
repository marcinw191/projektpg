import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaWykazComponent } from './oferta-wykaz.component';

describe('OfertaWykazComponent', () => {
  let component: OfertaWykazComponent;
  let fixture: ComponentFixture<OfertaWykazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaWykazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaWykazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
