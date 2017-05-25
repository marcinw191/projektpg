import { Component, Input, OnInit } from '@angular/core';

import { BazaOfertService }        from '../../serwisy/firebase-oferty/bazaofert.service';
import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-oferta-wykaz',
  templateUrl: './oferta-wykaz.component.html',
  styleUrls: ['./oferta-wykaz.component.css']
})
export class OfertaWykazComponent implements OnInit {
  @Input() key;
  @Input() profil;
  ogloszenie :any;
  oferta     :any;
  dzien      :any;
  result     :boolean;
  blokada    :boolean = false;
  tytul      :string;

  constructor(private bazaOfertService: BazaOfertService,
              private bazaOgloszenService: BazaOgloszenService) {
  }

  ngOnInit() {
    this.bazaOfertService.getOfertaDetails(this.key).subscribe(oferta =>
    { this.oferta = oferta;
      this.blokada = (this.oferta.blokada == "tak");
      this.dzien = moment(this.oferta.dataPublikacji).tz("Europe/Warsaw").format('YYYY-MM-DD');
      this.bazaOgloszenService.getOgloszenieByNumer(Number(this.oferta.numerOgloszenia)).subscribe(ogloszenie =>
      { this.ogloszenie = ogloszenie[0];
        this.tytul = this.ogloszenie.tytul;
      });
    });
  }

  deleteOferta(key) {
    this.result = confirm('Czy usunąć ofertę z bazy ?');
    if (this.result) {
      this.bazaOfertService.deleteOferta(key);
    }
  }

}
