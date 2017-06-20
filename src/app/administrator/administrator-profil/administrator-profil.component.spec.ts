import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorProfilComponent } from './administrator-profil.component';

describe('AdministratorProfilComponent', () => {
  let component: AdministratorProfilComponent;
  let fixture: ComponentFixture<AdministratorProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
