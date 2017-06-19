import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'
import { AngularFireDatabase }  from 'angularfire2/database';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { FirebaseApp } from 'angularfire2';
import { AuthService } from '../../serwisy/auth0/auth.service';
import { OgloszenieComponent } from './ogloszenie.component';
import { GoogleMapsComponent } from '../../googlemaps/googlemaps.component'
import { OfertaWykonaniaComponent } from '../../oferty/oferta-wykonania/oferta-wykonania.component'
import { AlertComponent } from '../../alert/alert.component'
import { BazaOfertService }        from '../../serwisy/firebase-oferty/bazaofert.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service'

import { MockAuth } from '../../mocks/mock-auth';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { MockStorge } from '../../mocks/mock-storage';
import { DialogService }     from 'ngx-bootstrap-modal';

class mapsAPILoader{
  public load() {
    return new Promise((resolve, reject) => { });
  }
}

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
  snapshot: {
    params: { id: 1}
  }
};


describe('OgloszenieComponent', () => {
  let component: OgloszenieComponent;
  let fixture: ComponentFixture<OgloszenieComponent>;
  let mockFirebase = new MockAngularFireDatabase();
  let mockAuth = new MockAuth();
  let mockStorage = new MockStorge();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszenieComponent, GoogleMapsComponent, OfertaWykonaniaComponent, AlertComponent ],
      imports: [ FormsModule, RouterModule, AlertModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRouter },
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
        BazaUzytkownikowService,
        BazaOfertService,
        DialogService,
        { provide: AuthService, useValue: mockAuth.getMock()},
        { provide: MapsAPILoader, useClass: mapsAPILoader },
        { provide: FirebaseApp, useValue: mockStorage.getMock()}
      ],
      schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('powinien stworzyć obiekt z ustawionymi polami', () => {
    expect(component.zdjecie0).toEqual("");
    expect(component.zdjecie1).toEqual("");
    expect(component.zdjecie2).toEqual("");
    expect(component.zdjecie3).toEqual("");
    expect(component.zdjecie4).toEqual("");
    expect(component.zlecajacy).toBeDefined();
    expect(component.oferent).toBeDefined();
    // expect(component.oferta).toEqual({});
    // expect(component.oferta_dodana).toBe(false);

  });

  // it('powinien wyczyścić wprowadzaną ofertę', () => {
  //   component.wyczyscOferte();
  //   expect(component.oferta).toEqual({});
  // });

  it('powinien załadować ogłoszenie', () => {
    component.ngOnInit();
    setTimeout(function(){
      //expect(component.tytul).toEqual(ogloszenie.tytul);
      //expect(component.istnieje).toEqual(true);
      //expect(component.telefon).toEqual(ogloszenie.telefon);
      //expect(component.opis).toEqual(ogloszenie.opis);
      //expect(component.ulica).toEqual(ogloszenie.ulica);
      //expect(component.ulica_numer).toEqual(ogloszenie.ulica_numer);
      //expect(component.miasto).toEqual(ogloszenie.miasto);
      //expect(component.dataPublikacji).toEqual(ogloszenie.dataPublikacji);
      //expect(component.koniecLicytacji).toEqual(ogloszenie.koniecLicytacji);
      //expect(component.maxCena).toEqual(ogloszenie.maxCena);
      //expect(component.user_id).toEqual(ogloszenie.zlecajacy);
      //expect(component.czasWykonania).toEqual(ogloszenie.czasWykonania);
    }, 3000);

  });

});
