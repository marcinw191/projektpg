import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { OfertaDodajComponent } from './oferta-dodaj.component';
import {AlertComponent} from "../../alert/alert.component";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {AlertModule} from "ngx-bootstrap"
import {AuthService} from "../../serwisy/auth0/auth.service";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";

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

describe('OfertaDodajComponent', () => {
  let component: OfertaDodajComponent;
  let fixture: ComponentFixture<OfertaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDodajComponent, AlertComponent ],
      imports: [ FormsModule, RouterModule, AlertModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [ AuthService, { provide: Router, useValue: mockRouter}, BazaUzytkownikowService, AngularFireModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
