import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorOgloszenieComponent } from './administrator-ogloszenie.component';

describe('AdministratorOgloszenieComponent', () => {
  let component: AdministratorOgloszenieComponent;
  let fixture: ComponentFixture<AdministratorOgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOgloszenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOgloszenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
