import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { OgloszeniaWykazComponent } from './ogloszenia-wykaz.component';
import {OgloszenieWykazComponent} from "../ogloszenie-wykaz/ogloszenie-wykaz.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BazaOgloszenService} from "../../serwisy/firebase-ogloszenia/bazaogloszen.service";
import { MockAngularFireDatabase } from '../../mocks/mock-angularfire';

describe('OgloszeniaWykazComponent', () => {
  let component: OgloszeniaWykazComponent;
  let fixture: ComponentFixture<OgloszeniaWykazComponent>;
  let mockFirebase = new MockAngularFireDatabase();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OgloszeniaWykazComponent,
        OgloszenieWykazComponent
      ],
      imports: [
        RouterModule,
        FormsModule,
      ],
      providers: [
        BazaOgloszenService,
        { provide: AngularFireDatabase, useValue: mockFirebase.getMock()},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszeniaWykazComponent);
    component = fixture.componentInstance;
    component.profil = { user_id: "123" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
