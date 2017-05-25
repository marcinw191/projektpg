import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszeniaWykazComponent } from './ogloszenia-wykaz.component';

describe('OgloszeniaWykazComponent', () => {
  let component: OgloszeniaWykazComponent;
  let fixture: ComponentFixture<OgloszeniaWykazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszeniaWykazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszeniaWykazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
