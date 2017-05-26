import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { AdministratorOgloszeniaComponent } from './administrator-ogloszenia.component';
import {AdministratorOgloszenieComponent} from "../administrator-ogloszenie/administrator-ogloszenie.component";
import {ProfilUzytkownikComponent} from "../../profil/profil-uzytkownik/profil-uzytkownik.component";
import {FormsModule} from "@angular/forms";
import {BazaOgloszenService} from "../../serwisy/firebase-ogloszenia/bazaogloszen.service";

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};


describe('AdministratorOgloszeniaComponent', () => {
  let component: AdministratorOgloszeniaComponent;
  let fixture: ComponentFixture<AdministratorOgloszeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOgloszeniaComponent, AdministratorOgloszenieComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [ BazaOgloszenService, AngularFireModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOgloszeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
