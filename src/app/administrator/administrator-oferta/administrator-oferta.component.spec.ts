import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilUzytkownikComponent } from '../../profil/profil-uzytkownik/profil-uzytkownik.component';
import 'firebase/storage';
import { AdministratorOfertaComponent } from './administrator-oferta.component';
import {FormsModule} from "@angular/forms";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { DialogService }     from 'ngx-bootstrap-modal';


describe('AdministratorOfertaComponent', () => {
  let component: AdministratorOfertaComponent;
  let fixture: ComponentFixture<AdministratorOfertaComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOfertaComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        BazaOfertService,
        {provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        BazaUzytkownikowService,
        FirebaseApp,
        DialogService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOfertaComponent);
    component = fixture.componentInstance;
    component.oferta = { oferent: "123"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
