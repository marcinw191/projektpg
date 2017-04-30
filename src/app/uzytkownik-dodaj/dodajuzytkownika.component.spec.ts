import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajuzytkownikaComponent } from './dodajuzytkownika.component';

describe('DodajuzytkownikaComponent', () => {
  let component: DodajuzytkownikaComponent;
  let fixture: ComponentFixture<DodajuzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajuzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajuzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
