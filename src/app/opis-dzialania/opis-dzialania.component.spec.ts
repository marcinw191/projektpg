import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router'

import { OpisDzialaniaComponent } from './opis-dzialania.component';
import { AuthService } from '../serwisy/auth0/auth.service';

let mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
};

describe('OpisDzialaniaComponent', () => {
  let component: OpisDzialaniaComponent;
  let fixture: ComponentFixture<OpisDzialaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisDzialaniaComponent ],
      imports: [ RouterModule ],
      providers: [
        AuthService,
        {provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisDzialaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
