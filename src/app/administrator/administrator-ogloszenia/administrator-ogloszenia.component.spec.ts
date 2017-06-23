import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { LocationStrategy } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DialogService } from 'ngx-bootstrap-modal';

import { AdministratorOgloszeniaComponent } from './administrator-ogloszenia.component';
import { AdministratorOgloszenieComponent} from '../administrator-ogloszenie/administrator-ogloszenie.component';
import { ProfilUzytkownikComponent } from '../../profil/profil-uzytkownik/profil-uzytkownik.component';
import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

describe('AdministratorOgloszeniaComponent', () => {
  let component: AdministratorOgloszeniaComponent;
  let fixture: ComponentFixture<AdministratorOgloszeniaComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdministratorOgloszeniaComponent,
        AdministratorOgloszenieComponent,
        ProfilUzytkownikComponent
      ],
      imports: [
        FormsModule,
        RouterModule,
      ],
      providers: [
        BazaOgloszenService,
        BazaUzytkownikowService,
        DialogService,
        LocationStrategy,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock() },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockRouter },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOgloszeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
