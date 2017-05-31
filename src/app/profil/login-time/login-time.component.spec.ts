import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireDatabase}  from 'angularfire2/database';

import { LoginTimeComponent } from './login-time.component';
import { AuthService } from '../../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};


describe('LoginTimeComponent', () => {
  let component: LoginTimeComponent;
  let fixture: ComponentFixture<LoginTimeComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTimeComponent ],
      imports: [ ],
      providers: [
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        BazaUzytkownikowService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem('profile',JSON.stringify({updated_at: "2017-04-20T20:21:53.411Z"}));
    fixture = TestBed.createComponent(LoginTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
