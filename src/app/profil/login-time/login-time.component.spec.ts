import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router'

import { LoginTimeComponent } from './login-time.component';
import { AuthService } from '../../serwisy/auth0/auth.service';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

describe('LoginTimeComponent', () => {
  let component: LoginTimeComponent;
  let fixture: ComponentFixture<LoginTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTimeComponent ],
      providers: [
        AuthService,
        { provide: Router, useValue: mockRouter },
      ]
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
