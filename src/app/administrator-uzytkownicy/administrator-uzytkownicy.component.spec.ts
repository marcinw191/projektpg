import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorUzytkownicyComponent } from './administrator-uzytkownicy.component';

describe('AdministratorUzytkownicyComponent', () => {
  let component: AdministratorUzytkownicyComponent;
  let fixture: ComponentFixture<AdministratorUzytkownicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUzytkownicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUzytkownicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
