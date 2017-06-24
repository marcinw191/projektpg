import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'ngx-bootstrap-modal';

import { options } from '../../app-variables';
import { BazaOfertService } from '../../serwisy/firebase-oferty/bazaofert.service';

@Component({
  selector: 'app-administrator-oferta',
  templateUrl: './administrator-oferta.component.html',
  styleUrls: ['./administrator-oferta.component.css'],
})

export class AdministratorOfertaComponent implements OnInit {
  @Input() key;
  public oferta: any;
  private result: boolean;
  private blokada: boolean = false;
  private opcje: any = options;

  constructor(private bazaOfertService: BazaOfertService,
              public dialogService: DialogService) { }

  ngOnInit() {
    this.bazaOfertService.getOfertaDetails(this.key).subscribe(oferta =>
    { this.oferta = oferta;
      this.blokada = (this.oferta.blokada == "tak");
    });
  }

  blockOferta(key){
    let oferta: any;
    if (this.blokada) {
      oferta = { blokada: 'tak' };
      this.opcje.icon = 'success';
      this.opcje.confirmButtonText = 'OK';
      this.dialogService.alert('', 'Oferta zablokowana !!!', this.opcje);
    }
    else {
      oferta = { blokada: 'nie' };
      this.opcje.icon = 'success';
      this.opcje.confirmButtonText = 'OK';
      this.dialogService.alert('', 'Oferta odblokowana !!!', this.opcje);
    }
    this.bazaOfertService.updateOferta(key, oferta);
  }

  deleteOferta(key) {
    this.opcje.icon = 'question';
    this.opcje.confirmButtonText = 'Usuń';
    this.opcje.cancelButtonText = 'Nie';
    this.dialogService.confirm('', 'Czy usunąć ofertę z bazy ?', this.opcje).then((res: any) => {
      this.result = res;
      if (this.result) {
        this.bazaOfertService.deleteOferta(key);
      }
    });
  }

}
