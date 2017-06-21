import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogService } from 'ngx-bootstrap-modal';

import { AdministratorOgloszenieComponent } from './administrator-ogloszenie.component';
import { ProfilUzytkownikComponent } from '../../profil/profil-uzytkownik/profil-uzytkownik.component';
import { OgloszenieComponent } from '../../ogloszenia/ogloszenie/ogloszenie.component';
import { GoogleMapsComponent } from '../../googlemaps/googlemaps.component';
import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('AdministratorOgloszenieComponent', () => {
  let component: AdministratorOgloszenieComponent;
  let fixture: ComponentFixture<AdministratorOgloszenieComponent>;
  let location, router;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdministratorOgloszenieComponent,
        ProfilUzytkownikComponent,
        OgloszenieComponent,
        GoogleMapsComponent,
      ],
      imports: [
        FormsModule,
        RouterModule,
        RouterTestingModule.withRoutes([
          { path:'ogloszenie/:id', component: OgloszenieComponent },
        ]),
      ],
      providers: [
        BazaOgloszenService,
        BazaUzytkownikowService,
        DialogService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
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
