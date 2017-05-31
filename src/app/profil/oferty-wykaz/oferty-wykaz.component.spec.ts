import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { OfertyWykazComponent } from './oferty-wykaz.component';
import {OfertaWykazComponent} from "../oferta-wykaz/oferta-wykaz.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BazaOfertService} from "../../serwisy/firebase-oferty/bazaofert.service";
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('OfertyWykazComponent', () => {
  let component: OfertyWykazComponent;
  let fixture: ComponentFixture<OfertyWykazComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OfertyWykazComponent,
        OfertaWykazComponent
      ],
      imports: [
        RouterModule,
        FormsModule,
      ],
      providers: [
        BazaOfertService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertyWykazComponent);
    component = fixture.componentInstance;
    component.profil = { user_id: "123" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
