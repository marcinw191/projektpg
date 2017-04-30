import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaneuzytkownikaComponent } from './daneuzytkownika.component';

describe('DaneuzytkownikaComponent', () => {
  let component: DaneuzytkownikaComponent;
  let fixture: ComponentFixture<DaneuzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaneuzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaneuzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
