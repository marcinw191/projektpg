import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisDzialaniaComponent } from './opis-dzialania.component';

describe('OpisDzialaniaComponent', () => {
  let component: OpisDzialaniaComponent;
  let fixture: ComponentFixture<OpisDzialaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisDzialaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisDzialaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
