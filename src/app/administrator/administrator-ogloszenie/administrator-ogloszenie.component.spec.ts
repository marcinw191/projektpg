import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdministratorOgloszenieComponent } from './administrator-ogloszenie.component';
import {ProfilUzytkownikComponent} from "../../profil/profil-uzytkownik/profil-uzytkownik.component";
import {FormsModule} from "@angular/forms";
import {BazaOgloszenService} from "../../serwisy/firebase-ogloszenia/bazaogloszen.service";
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('AdministratorOgloszenieComponent', () => {
  let component: AdministratorOgloszenieComponent;
  let fixture: ComponentFixture<AdministratorOgloszenieComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOgloszenieComponent, ProfilUzytkownikComponent ],
      imports: [ FormsModule ],
      providers: [
        BazaOgloszenService,
        BazaUzytkownikowService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOgloszenieComponent);
    component = fixture.componentInstance;
    component.ogloszenie = { zlecajacy: "123" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
