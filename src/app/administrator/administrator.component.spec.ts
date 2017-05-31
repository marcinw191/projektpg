import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../serwisy/auth0/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

import { AdministratorComponent } from './administrator.component';
import { AdministratorUzytkownicyComponent } from '../administrator/administrator-uzytkownicy/administrator-uzytkownicy.component';
import { AdministratorOgloszeniaComponent } from '../administrator/administrator-ogloszenia/administrator-ogloszenia.component';
import { AdministratorOfertyComponent } from '../administrator/administrator-oferty/administrator-oferty.component';
import { AdministratorUzytkownikComponent } from '../administrator/administrator-uzytkownik/administrator-uzytkownik.component';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'
import {AdministratorOgloszenieComponent} from "./administrator-ogloszenie/administrator-ogloszenie.component";
import {AdministratorOfertaComponent} from "./administrator-oferta/administrator-oferta.component";
import {ProfilUzytkownikComponent} from "../profil/profil-uzytkownik/profil-uzytkownik.component";
import {MockAngularFireDatabase} from "../mocks/mock-angularfire";
import { MockAuth } from '../mocks/mock-auth';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

describe('AdministratorComponent', () => {
  let component: AdministratorComponent;
  let fixture: ComponentFixture<AdministratorComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorComponent, AdministratorUzytkownikComponent, AdministratorUzytkownicyComponent, AdministratorOgloszeniaComponent, AdministratorOfertyComponent, AdministratorOgloszenieComponent, AdministratorOfertaComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: Router, useValue: mockRouter},
        BazaUzytkownikowService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()}
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
