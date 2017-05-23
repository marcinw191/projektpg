import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaOgloszenComponent } from './ogloszenia-galeria.component';

describe('GaleriaOgloszenComponent', () => {
  let component: GaleriaOgloszenComponent;
  let fixture: ComponentFixture<GaleriaOgloszenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaOgloszenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaOgloszenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
