import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../serwisy/auth0/auth.service';

import { AdministratorComponent } from './administrator.component';
import { AdministratorUzytkownicyComponent } from '../administrator/administrator-uzytkownicy/administrator-uzytkownicy.component';
import { AdministratorOgloszeniaComponent } from '../administrator/administrator-ogloszenia/administrator-ogloszenia.component';
import { AdministratorOfertyComponent } from '../administrator/administrator-oferty/administrator-oferty.component';
import { AdministratorUzytkownikComponent } from '../administrator/administrator-uzytkownik/administrator-uzytkownik.component';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

let Auth0Lock = require('auth0-lock').default;

describe('AdministratorComponent', () => {
  let component: AdministratorComponent;
  let fixture: ComponentFixture<AdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorComponent, AdministratorUzytkownikComponent, AdministratorUzytkownicyComponent, AdministratorOgloszeniaComponent, AdministratorOfertyComponent ],
      imports: [ FormsModule ],
      providers: [
        AuthService,
        { provide: Router, useValue: mockRouter}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
