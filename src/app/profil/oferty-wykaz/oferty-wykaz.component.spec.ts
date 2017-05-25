import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertyWykazComponent } from './oferty-wykaz.component';

describe('OfertyWykazComponent', () => {
  let component: OfertyWykazComponent;
  let fixture: ComponentFixture<OfertyWykazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertyWykazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertyWykazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
