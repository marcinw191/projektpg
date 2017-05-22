import { TestBed, async } from '@angular/core/testing';
import { LocationStrategy } from '@angular/common';
import { RouterModule, Router, RouterOutletMap, ActivatedRoute } from '@angular/router';
import { CookieLawModule }  from 'angular2-cookie-law';

import { NavbarComponent } from './navbar/navbar.component';
import { PolicyComponent } from './cookielaw/policy/policy.component'
import { CookielawComponent } from './cookielaw/cookielaw.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { AuthService } from './serwisy/auth0/auth.service';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavbarComponent, CookielawComponent, FooterComponent, PolicyComponent
      ],
      imports: [ RouterModule, CookieLawModule ],
      providers: [
        AuthService,
        { provide: Router, useValue: mockRouter },
        RouterOutletMap,
        { provide: ActivatedRoute, useValue: mockRouter },
        LocationStrategy
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
