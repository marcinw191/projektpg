import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszenieWykazComponent } from './ogloszenie-wykaz.component';

describe('OgloszenieWykazComponent', () => {
  let component: OgloszenieWykazComponent;
  let fixture: ComponentFixture<OgloszenieWykazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszenieWykazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszenieWykazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
