import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AlertModule } from 'ngx-bootstrap';
import { AngularFireDatabase }  from 'angularfire2/database';
import { AuthService } from '../../serwisy/auth0/auth.service';
import { FirebaseApp } from 'angularfire2';

import { DodajOgloszenieComponent } from './ogloszenie-dodaj.component';
import { AlertComponent } from '../../alert/alert.component'
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { MockStorge } from '../../mocks/mock-storage';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

describe('DodajOgloszenieComponent', () => {
  let component: DodajOgloszenieComponent;
  let fixture: ComponentFixture<DodajOgloszenieComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();
  let mockStorage = new MockStorge();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajOgloszenieComponent, AlertComponent ],
      imports: [ AlertModule, FormsModule, RouterModule ],
      providers: [
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        BazaUzytkownikowService,
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: Router, useValue: mockRouter },
        { provide: FirebaseApp, useValue: mockStorage.getMock()}
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
