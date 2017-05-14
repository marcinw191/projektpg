import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTimeComponent } from './login-time.component';

describe('LoginTimeComponent', () => {
  let component: LoginTimeComponent;
  let fixture: ComponentFixture<LoginTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
