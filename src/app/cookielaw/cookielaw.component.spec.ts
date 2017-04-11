import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookielawComponent } from './cookielaw.component';

describe('CookielawComponent', () => {
  let component: CookielawComponent;
  let fixture: ComponentFixture<CookielawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookielawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookielawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
