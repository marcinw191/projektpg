import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilWidokPrzyciskiComponent } from './profil-widok-przyciski.component';

describe('ProfilWidokPrzyciskiComponent', () => {
  let component: ProfilWidokPrzyciskiComponent;
  let fixture: ComponentFixture<ProfilWidokPrzyciskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilWidokPrzyciskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilWidokPrzyciskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
