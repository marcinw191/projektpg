import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { AdministratorOgloszenieComponent } from './administrator-ogloszenie.component';
import {ProfilUzytkownikComponent} from "../../profil/profil-uzytkownik/profil-uzytkownik.component";
import {FormsModule} from "@angular/forms";
import {BazaOgloszenService} from "../../serwisy/firebase-ogloszenia/bazaogloszen.service";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('AdministratorOgloszenieComponent', () => {
  let component: AdministratorOgloszenieComponent;
  let fixture: ComponentFixture<AdministratorOgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOgloszenieComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [ BazaOgloszenService, AngularFireModule, BazaUzytkownikowService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOgloszenieComponent);
    component = fixture.componentInstance;
    component.ogloszenie = { zlecajacy: "123" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
