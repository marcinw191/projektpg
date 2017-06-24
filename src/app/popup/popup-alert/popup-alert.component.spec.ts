import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogService } from 'ngx-bootstrap-modal';

import { PopupAlertComponent } from './popup-alert.component';

describe('PopupAlertComponent', () => {
  let component: PopupAlertComponent;
  let fixture: ComponentFixture<PopupAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAlertComponent ],
      providers: [ DialogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
