import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorOgloszeniaComponent } from './administrator-ogloszenia.component';

describe('AdministratorOgloszeniaComponent', () => {
  let component: AdministratorOgloszeniaComponent;
  let fixture: ComponentFixture<AdministratorOgloszeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOgloszeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOgloszeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
