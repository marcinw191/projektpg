import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase} from 'angularfire2/database';
import { OfertaDodajComponent } from './oferta-dodaj.component';
import {AlertComponent} from "../../alert/alert.component";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {AlertModule} from "ngx-bootstrap"
import {AuthService} from "../../serwisy/auth0/auth.service";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";
import { Uzytkownik } from "../../klasy/uzytkownik";

import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};


describe('OfertaDodajComponent', () => {
  let component: OfertaDodajComponent;
  let fixture: ComponentFixture<OfertaDodajComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDodajComponent, AlertComponent ],
      imports: [ FormsModule, RouterModule, AlertModule ],
      providers: [
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: Router, useValue: mockRouter},
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        BazaUzytkownikowService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDodajComponent);
    component = fixture.componentInstance;
    component.oferent = new Uzytkownik();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
