import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule }  from 'angularfire2';
import { AuthService } from '../../serwisy/auth0/auth.service';

import { DodajOgloszenieComponent } from './ogloszenie-dodaj.component';
import { AlertComponent } from '../../alert/alert.component'
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

describe('DodajOgloszenieComponent', () => {
  let component: DodajOgloszenieComponent;
  let fixture: ComponentFixture<DodajOgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajOgloszenieComponent, AlertComponent ],
      imports: [ AlertModule, FormsModule, RouterModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        AngularFireModule,
        BazaUzytkownikowService,
        AuthService,
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajOgloszenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
