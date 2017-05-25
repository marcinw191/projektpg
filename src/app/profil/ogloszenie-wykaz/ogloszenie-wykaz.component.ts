import { Component, Input, OnInit } from '@angular/core';

import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';
import { BazaOfertService }    from '../../serwisy/firebase-oferty/bazaofert.service';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-ogloszenie-wykaz',
  templateUrl: './ogloszenie-wykaz.component.html',
  styleUrls: ['./ogloszenie-wykaz.component.css'],
})

export class OgloszenieWykazComponent implements OnInit {
  @Input() key;
  @Input() profil;
  ogloszenie :any;
  oferty     :any;
  dzien      :any;
  ilosc_ofert:number;
  result     :boolean;
  blokada    :boolean = false;

  constructor(private bazaOgloszenService: BazaOgloszenService,
              private bazaOfertService: BazaOfertService) {
  }

  ngOnInit() {
    this.bazaOgloszenService.getOgloszenieDetails(this.key).subscribe(ogloszenie =>
    { this.ogloszenie = ogloszenie;
      this.blokada = (this.ogloszenie.blokada == "tak");
      this.dzien = moment(this.ogloszenie.koniecLicytacji).tz("Europe/Warsaw").format('YYYY-MM-DD');
      this.bazaOfertService.getOfertaByOgloszenie(this.ogloszenie.numerOgloszenia.toString()).subscribe(oferty =>
      { this.oferty = oferty;
        this.ilosc_ofert=this.oferty.length;
      });
    });
  }

  deleteOgloszenie(key) {
    this.result = confirm('Czy usunąć ogłoszenie z bazy ?');
    if (this.result) {
      this.bazaOgloszenService.deleteOgloszenie(key);
    }
  }

}
