import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilUzytkownikComponent } from './profil-uzytkownik.component';
import {BazaUzytkownikowService} from "../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service";
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('ProfilUzytkownikComponent', () => {
  let component: ProfilUzytkownikComponent;
  let fixture: ComponentFixture<ProfilUzytkownikComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUzytkownikComponent ],
      imports: [ ],
      providers: [
        BazaUzytkownikowService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUzytkownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
