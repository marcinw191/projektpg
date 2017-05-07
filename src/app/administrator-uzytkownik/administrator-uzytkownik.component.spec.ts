import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorUzytkownikComponent } from './administrator-uzytkownik.component';

describe('AdministratorUzytkownikComponent', () => {
  let component: AdministratorUzytkownikComponent;
  let fixture: ComponentFixture<AdministratorUzytkownikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUzytkownikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUzytkownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
