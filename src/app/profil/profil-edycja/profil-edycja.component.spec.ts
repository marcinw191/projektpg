import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEdycjaComponent } from './profil-edycja.component';

describe('ProfilEdycjaComponent', () => {
  let component: ProfilEdycjaComponent;
  let fixture: ComponentFixture<ProfilEdycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilEdycjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEdycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
