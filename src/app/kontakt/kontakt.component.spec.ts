import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MailsendService } from '../serwisy/mail/mailsend.service';
import { GoogleMapsComponent } from '../googlemaps/googlemaps.component';
import { KontaktComponent } from './kontakt.component';
import { MockMail } from '../mocks/mock-mail';
import { FormsModule } from '@angular/forms';
import { MapsAPILoader } from 'angular2-google-maps/core';

// class mapsAPILoader{
//   public load() {
//     return new Promise((resolve, reject) => { });
//   }
// }

describe('KontaktComponent', () => {
  let component: KontaktComponent;
  let fixture: ComponentFixture<KontaktComponent>;
  let mockMail = new MockMail();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        KontaktComponent,
        GoogleMapsComponent
      ],
      providers: [
        { provide: MailsendService, useValue: mockMail.getMock() },
        { provide: MapsAPILoader },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
