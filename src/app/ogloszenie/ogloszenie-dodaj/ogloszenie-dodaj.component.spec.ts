import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule }  from 'angularfire2';

import { DodajOgloszenieComponent } from './ogloszenie-dodaj.component';
import { AlertComponent } from '../../alert/alert.component'

let firebaseConfig = {
  apiKey: "AIzaSyDIUpjNc8RE0NDMFmuW3LRYhuZwiH7R-Vo",
  authDomain: "kaskada-5ebd3.firebaseapp.com",
  databaseURL: "https://kaskada-5ebd3.firebaseio.com",
  projectId: "kaskada-5ebd3",
  storageBucket: "kaskada-5ebd3.appspot.com",
  messagingSenderId: "846477355550"
};

describe('DodajOgloszenieComponent', () => {
  let component: DodajOgloszenieComponent;
  let fixture: ComponentFixture<DodajOgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajOgloszenieComponent, AlertComponent ],
      imports: [ AlertModule, FormsModule, RouterModule, AngularFireModule.initializeApp(firebaseConfig) ],
      providers: [
        AngularFireModule
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
