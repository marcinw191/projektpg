import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdministratorOfertyComponent } from './administrator-oferty.component';
import {AdministratorOfertaComponent} from "../administrator-oferta/administrator-oferta.component";
import {ProfilUzytkownikComponent} from "../../profil/profil-uzytkownik/profil-uzytkownik.component";
import {FormsModule} from "@angular/forms";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";

import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";
import { DialogService }     from 'ngx-bootstrap-modal';

describe('AdministratorOfertyComponent', () => {
  let component: AdministratorOfertyComponent;
  let fixture: ComponentFixture<AdministratorOfertyComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOfertyComponent, AdministratorOfertaComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        BazaOfertService,
        BazaUzytkownikowService,
        DialogService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOfertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
