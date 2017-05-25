import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LocationStrategy } from '@angular/common';
import { RouterModule, Router, RouterOutletMap, ActivatedRoute } from '@angular/router';
import { CookieLawModule }  from 'angular2-cookie-law';
import { AngularFireModule } from 'angularfire2';

import { NavbarComponent } from './navbar/navbar.component';
import { PolicyComponent } from './cookielaw/policy/policy.component'
import { CookielawComponent } from './cookielaw/cookielaw.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { AuthService } from './serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from './serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavbarComponent, CookielawComponent, FooterComponent, PolicyComponent
      ],
      imports: [ RouterModule, CookieLawModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        AuthService,
        { provide: Router, useValue: mockRouter},
        RouterOutletMap,
        LocationStrategy,
        { provide: ActivatedRoute, useValue: mockRouter },

        BazaUzytkownikowService,
        AngularFireModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create the app',() => {
    expect(component).toBeTruthy();
  });
*/
});
