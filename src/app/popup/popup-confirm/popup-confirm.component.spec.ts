import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogService } from 'ngx-bootstrap-modal';

import { PopupConfirmComponent } from './popup-confirm.component';

describe('PopupConfirmComponent', () => {
  let component: PopupConfirmComponent;
  let fixture: ComponentFixture<PopupConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupConfirmComponent ],
      providers: [ DialogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
