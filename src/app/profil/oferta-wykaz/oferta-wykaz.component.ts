import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'ngx-bootstrap-modal';

import { options } from '../../app-variables';

import { BazaOfertService }    from '../../serwisy/firebase-oferty/bazaofert.service';
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
  private ogloszenie: any;
  private oferta: any;
  private dzien: any;
  private result: boolean;
  private blokada: boolean = false;
  private tytul: string;
  private opcje: any = options;

  constructor(private bazaOfertService: BazaOfertService,
              private bazaOgloszenService: BazaOgloszenService,
              public dialogService: DialogService) {
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
    this.opcje.icon = 'question';
    this.opcje.confirmButtonText = 'Usuń';
    this.opcje.cancelButtonText = 'Powrót';
    this.dialogService.confirm('', 'Czy usunąć ofertę z bazy ?', this.opcje).then((res: any) => {
      this.result = res;
      if (this.result) {
        this.bazaOfertService.deleteOferta(key);
      }
    });
  }

}
