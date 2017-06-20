import { Component, Input, OnInit } from '@angular/core';
import { DialogService }     from 'ngx-bootstrap-modal';

import { options } from '../../app-variables';

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
  private ogloszenie: any;
  private oferty: any;
  private dzien: any;
  private ilosc_ofert: number;
  private result: boolean;
  private blokada: boolean = false;
  private opcje: any = options;

  constructor(private bazaOgloszenService: BazaOgloszenService,
              private bazaOfertService: BazaOfertService,
              public dialogService: DialogService) {
  }

  ngOnInit() {
    this.bazaOgloszenService.getOgloszenieDetails(this.key).subscribe(ogloszenie =>
    { this.ogloszenie = ogloszenie;
      this.blokada = (this.ogloszenie.blokada == "tak");
      this.dzien = moment(this.ogloszenie.koniecLicytacji).tz("Europe/Warsaw").format('YYYY-MM-DD');
      this.bazaOfertService.getOfertyByOgloszenie(this.ogloszenie.numerOgloszenia.toString()).subscribe(oferty =>
      { this.oferty = oferty;
        this.ilosc_ofert=this.oferty.length;
      });
    });
  }

  deleteOgloszenie(key) {
    this.opcje.icon = 'question';
    this.opcje.confirmButtonText = 'Usuń';
    this.opcje.cancelButtonText = 'Nie';
    this.dialogService.confirm('', 'Czy usunąć ogłoszenie z bazy ?', this.opcje).then((res: any) => {
      this.result = res;
      if (this.result) {
        this.bazaOgloszenService.deleteOgloszenie(key);
      }
    });
  }

}
