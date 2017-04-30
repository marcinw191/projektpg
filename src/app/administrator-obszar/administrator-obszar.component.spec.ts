import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorObszarComponent } from './administrator-obszar.component';

describe('AdministratorObszarComponent', () => {
  let component: AdministratorObszarComponent;
  let fixture: ComponentFixture<AdministratorObszarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorObszarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorObszarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
