import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";

import { ProfilEdycjaComponent } from './profil-edycja.component';
import { WalidacjaService } from '../../serwisy/walidacja/walidacja.service';

describe('ProfilEdycjaComponent', () => {
  let component: ProfilEdycjaComponent;
  let fixture: ComponentFixture<ProfilEdycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilEdycjaComponent ],
      imports: [ FormsModule ],
      providers: [ WalidacjaService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEdycjaComponent);
    component = fixture.componentInstance;
    component.profil_edit = { telefon: "1234" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
