import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AdministratorUzytkownicyComponent } from './administrator-uzytkownicy.component';
import { AdministratorUzytkownikComponent } from '../administrator-uzytkownik/administrator-uzytkownik.component';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AuthService} from "../../serwisy/auth0/auth.service";
import {Router} from "@angular/router";

import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

describe('AdministratorUzytkownicyComponent', () => {
  let component: AdministratorUzytkownicyComponent;
  let fixture: ComponentFixture<AdministratorUzytkownicyComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUzytkownicyComponent, AdministratorUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        BazaUzytkownikowService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: Router, useValue: mockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUzytkownicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
