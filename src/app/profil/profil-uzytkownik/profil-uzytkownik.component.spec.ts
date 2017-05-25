import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUzytkownikComponent } from './profil-uzytkownik.component';

describe('ProfilUzytkownikComponent', () => {
  let component: ProfilUzytkownikComponent;
  let fixture: ComponentFixture<ProfilUzytkownikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUzytkownikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUzytkownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
