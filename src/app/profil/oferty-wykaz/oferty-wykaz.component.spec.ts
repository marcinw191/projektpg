import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { OfertyWykazComponent } from './oferty-wykaz.component';
import {OfertaWykazComponent} from "../oferta-wykaz/oferta-wykaz.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};


describe('OfertyWykazComponent', () => {
  let component: OfertyWykazComponent;
  let fixture: ComponentFixture<OfertyWykazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OfertyWykazComponent,
        OfertaWykazComponent
      ],
      imports: [
        RouterModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: [
        BazaOfertService,
        AngularFireModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertyWykazComponent);
    component = fixture.componentInstance;
    component.profil = { user_id: "123" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
