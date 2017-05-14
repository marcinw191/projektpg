import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorOfertyComponent } from './administrator-oferty.component';

describe('AdministratorOfertyComponent', () => {
  let component: AdministratorOfertyComponent;
  let fixture: ComponentFixture<AdministratorOfertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOfertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOfertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
