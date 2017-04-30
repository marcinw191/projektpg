import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPodgladComponent } from './profil-podglad.component';

describe('ProfilPodgladComponent', () => {
  let component: ProfilPodgladComponent;
  let fixture: ComponentFixture<ProfilPodgladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPodgladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPodgladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
