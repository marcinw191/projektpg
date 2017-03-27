import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszenieMiniaturaComponent } from './ogloszenie-miniatura.component';

describe('OgloszenieMiniaturaComponent', () => {
  let component: OgloszenieMiniaturaComponent;
  let fixture: ComponentFixture<OgloszenieMiniaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszenieMiniaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszenieMiniaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
