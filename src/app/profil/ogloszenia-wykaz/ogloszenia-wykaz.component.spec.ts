import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { OgloszeniaWykazComponent } from './ogloszenia-wykaz.component';
import {OgloszenieWykazComponent} from "../ogloszenie-wykaz/ogloszenie-wykaz.component";
import {RouterModule} from "@angular/router";
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

describe('OgloszeniaWykazComponent', () => {
  let component: OgloszeniaWykazComponent;
  let fixture: ComponentFixture<OgloszeniaWykazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OgloszeniaWykazComponent,
        OgloszenieWykazComponent
      ],
      imports: [
        RouterModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: [
        BazaOgloszenService,
        AngularFireModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszeniaWykazComponent);
    component = fixture.componentInstance;
    component.profil = { user_id: "123" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
