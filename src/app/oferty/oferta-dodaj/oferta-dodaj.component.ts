import { Component, Input } from '@angular/core';
import { AngularFire }      from 'angularfire2';

import { AuthService } from '../../serwisy/auth0/auth.service';

import { Oferta }      from '../../klasy/oferta';
import { Uzytkownik }  from "../../klasy/uzytkownik";

@Component({
  selector: 'app-oferta-dodaj',
  templateUrl: './oferta-dodaj.component.html',
  styleUrls: ['./oferta-dodaj.component.css'],
})

export class OfertaDodajComponent {
  @Input() oferent: Uzytkownik;
  @Input() nr_ogl : number;
  oferta: any;
  oferta_dodana: boolean;
  oferta_status: string;
  oferta_text: string;

  constructor(private auth: AuthService,
              private af: AngularFire) {
    this.oferta = {};
    this.oferta_dodana = false;
  }

  public dodajOferte()
  {
    let _this = this;
    let oferta = new Oferta(
      this.oferent.user_id,
      this.oferta.cena,
      this.oferta.wiadomosc,
      this.oferta.telefon,
      this.nr_ogl,
      new Date().toISOString()
    );

    let oferty = this.af.database.list('/oferty');
    oferty.push(oferta).then(function(data){
      _this.wyczyscOferte();
      _this.oferta_dodana = true;
      _this.oferta_status = 'success';
      _this.oferta_text = "Oferta dodana poprawnie.";
    }).catch(function(){
      _this.wyczyscOferte();
      _this.oferta_dodana = true;
      _this.oferta_status = 'error';
      _this.oferta_text = "Dodawanie oferty nie powiodło się. Proszę spróbować ponownie.";
    });
  }

  private wyczyscOferte()
  {
    this.oferta = {};
  }

}
