import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase} from 'angularfire2/database';
import { AdministratorOgloszeniaComponent } from './administrator-ogloszenia.component';
import {AdministratorOgloszenieComponent} from "../administrator-ogloszenie/administrator-ogloszenie.component";
import {ProfilUzytkownikComponent} from "../../profil/profil-uzytkownik/profil-uzytkownik.component";
import {FormsModule} from "@angular/forms";
import {BazaOgloszenService} from "../../serwisy/firebase-ogloszenia/bazaogloszen.service";
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";

describe('AdministratorOgloszeniaComponent', () => {
  let component: AdministratorOgloszeniaComponent;
  let fixture: ComponentFixture<AdministratorOgloszeniaComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOgloszeniaComponent, AdministratorOgloszenieComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        BazaOgloszenService,
        BazaUzytkownikowService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock() }
      ]
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
