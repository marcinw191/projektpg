import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase }  from 'angularfire2/database';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';
import { OfertaWykonaniaComponent } from './oferta-wykonania.component';

describe('OfertaWykonaniaComponent', () => {
  let component: OfertaWykonaniaComponent;
  let fixture: ComponentFixture<OfertaWykonaniaComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaWykonaniaComponent ],
      imports: [ ],
      providers: [
        BazaUzytkownikowService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
      ],
      schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaWykonaniaComponent);
    component = fixture.componentInstance;
    component.oferta = { cena: "120PLN" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
