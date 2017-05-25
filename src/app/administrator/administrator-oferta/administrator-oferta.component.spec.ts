import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorOfertaComponent } from './administrator-oferta.component';

describe('AdministratorOfertaComponent', () => {
  let component: AdministratorOfertaComponent;
  let fixture: ComponentFixture<AdministratorOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
