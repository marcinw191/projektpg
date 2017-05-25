import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AdministratorUzytkownicyComponent } from './administrator-uzytkownicy.component';
import { AdministratorUzytkownikComponent } from '../administrator-uzytkownik/administrator-uzytkownik.component';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { AngularFireModule } from 'angularfire2';

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('AdministratorUzytkownicyComponent', () => {
  let component: AdministratorUzytkownicyComponent;
  let fixture: ComponentFixture<AdministratorUzytkownicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUzytkownicyComponent, AdministratorUzytkownikComponent ],
      imports: [ FormsModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [ BazaUzytkownikowService, AngularFireModule ]
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
