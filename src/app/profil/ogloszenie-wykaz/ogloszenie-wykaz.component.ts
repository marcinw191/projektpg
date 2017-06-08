import { Component, Input, OnInit } from '@angular/core';
import { DialogService }     from 'ngx-bootstrap-modal';

import { PopupConfirmComponent } from '../../popup/popup-confirm/popup-confirm.component';

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
    // this.result = confirm('Czy usunąć ogłoszenie z bazy ?');
    this.dialogService.addDialog(PopupConfirmComponent, {
      title: '',
      message: 'Czy usunąć ogłoszenie z bazy ?'
    })
      .subscribe((isConfirmed) => {
        //Get dialog result
        this.result = isConfirmed;
      });
    if (this.result) {
      this.bazaOgloszenService.deleteOgloszenie(key);
    }
  }

}
