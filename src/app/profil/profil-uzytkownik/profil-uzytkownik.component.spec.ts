import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { ProfilUzytkownikComponent } from './profil-uzytkownik.component';
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('ProfilUzytkownikComponent', () => {
  let component: ProfilUzytkownikComponent;
  let fixture: ComponentFixture<ProfilUzytkownikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUzytkownikComponent ],
      imports: [ AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [ BazaUzytkownikowService, AngularFireModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUzytkownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
