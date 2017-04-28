import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzukajuzytkownikaComponent } from './szukajuzytkownika.component';

describe('SzukajuzytkownikaComponent', () => {
  let component: SzukajuzytkownikaComponent;
  let fixture: ComponentFixture<SzukajuzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzukajuzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzukajuzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
