import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilWidokComponent } from './profil-widok.component';

describe('ProfilWidokComponent', () => {
  let component: ProfilWidokComponent;
  let fixture: ComponentFixture<ProfilWidokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilWidokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilWidokComponent);
    component = fixture.componentInstance;
    component.profil_view = { zdjecie: "" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
