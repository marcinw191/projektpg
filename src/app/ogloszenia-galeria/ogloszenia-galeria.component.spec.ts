import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AngularFireModule }  from 'angularfire2';

import { GaleriaOgloszenComponent } from './ogloszenia-galeria.component';
import { OgloszenieMiniaturaComponent } from '../ogloszenie/ogloszenie-miniatura/ogloszenie-miniatura.component';
import { AuthService } from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

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

describe('GaleriaOgloszenComponent', () => {
  let component: GaleriaOgloszenComponent;
  let fixture: ComponentFixture<GaleriaOgloszenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaOgloszenComponent, OgloszenieMiniaturaComponent ],
      imports: [ FormsModule, RouterModule, AngularFireModule.initializeApp(firebaseConfig)  ],
      providers: [
        AuthService,
        { provide: Router, useValue: mockRouter },
        AngularFireModule,
        BazaUzytkownikowService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaOgloszenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
