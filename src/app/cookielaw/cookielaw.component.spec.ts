import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { CookielawComponent } from './cookielaw.component';

describe('CookielawComponent', () => {
  let component: CookielawComponent;
  let fixture: ComponentFixture<CookielawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookielawComponent ],
      imports: [ CookieLawModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookielawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
