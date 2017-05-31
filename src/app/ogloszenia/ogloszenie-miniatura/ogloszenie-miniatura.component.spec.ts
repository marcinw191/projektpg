import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router'
import { FirebaseApp } from 'angularfire2';

import { OgloszenieMiniaturaComponent } from './ogloszenie-miniatura.component';
import { MockStorge } from '../../mocks/mock-storage';

describe('OgloszenieMiniaturaComponent', () => {
  let component: OgloszenieMiniaturaComponent;
  let fixture: ComponentFixture<OgloszenieMiniaturaComponent>;
  let mockStorage = new MockStorge();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszenieMiniaturaComponent ],
      imports: [ RouterModule ],
      providers: [
        { provide: FirebaseApp, useValue: mockStorage.getMock()}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszenieMiniaturaComponent);
    component = fixture.componentInstance;
    component.miniatura = {
      pliki: [ "" ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
