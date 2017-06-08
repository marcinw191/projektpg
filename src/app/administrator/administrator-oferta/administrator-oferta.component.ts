import { Component, Input, OnInit } from '@angular/core';
import { DialogService }     from 'ngx-bootstrap-modal';

import { PopupAlertComponent }   from '../../popup/popup-alert/popup-alert.component';
import { PopupConfirmComponent } from '../../popup/popup-confirm/popup-confirm.component';

import { BazaOfertService } from '../../serwisy/firebase-oferty/bazaofert.service';

@Component({
  selector: 'app-administrator-oferta',
  templateUrl: './administrator-oferta.component.html',
  styleUrls: ['./administrator-oferta.component.css'],
})

export class AdministratorOfertaComponent implements OnInit {
  @Input() key;
  oferta  :any;
  result  :boolean;
  blokada :boolean = false;

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
      // alert('Oferta zablokowana !!!');
      this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Oferta zablokowana !!!' });
    }
    else {
      oferta = { blokada: 'nie' };
      // alert('Oferta odblokowana !!!');
      this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Oferta odblokowana !!!' });
    }
    this.bazaOfertService.updateOferta(key, oferta);
  }

  deleteOferta(key) {
    // this.result = confirm('Czy usunąć ofertę z bazy ?');
    this.dialogService.addDialog(PopupConfirmComponent, {
      title: '',
      message: 'Czy usunąć ofertę z bazy ?'
    })
      .subscribe((isConfirmed) => {
        //Get dialog result
        this.result = isConfirmed;
      });
    if (this.result) {
      this.bazaOfertService.deleteOferta(key);
    }
  }

}
