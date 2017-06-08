import { Component, Input, OnInit } from '@angular/core';
import { DialogService }     from 'ngx-bootstrap-modal';

import { PopupAlertComponent }   from '../../popup/popup-alert/popup-alert.component';
import { PopupConfirmComponent } from '../../popup/popup-confirm/popup-confirm.component';

import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';

@Component({
  selector: 'app-administrator-ogloszenie',
  templateUrl: './administrator-ogloszenie.component.html',
  styleUrls: ['./administrator-ogloszenie.component.css'],
})

export class AdministratorOgloszenieComponent implements OnInit {
  @Input() key;
  ogloszenie :any;
  result     :boolean;
  blokada    :boolean = false;

  constructor(private bazaOgloszenService: BazaOgloszenService,
              public dialogService: DialogService) { }

  ngOnInit() {
    this.bazaOgloszenService.getOgloszenieDetails(this.key).subscribe(ogloszenie =>
    { this.ogloszenie = ogloszenie;
      this.blokada = (this.ogloszenie.blokada == "tak");
    });
  }

  blockOgloszenie(key){
    let ogloszenie: any;
    if (this.blokada) {
      ogloszenie = { blokada: 'tak' };
      // alert('Ogłoszenie zablokowane !!!');
      this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Ogłoszenie zablokowane !!!' });
    }
    else {
      ogloszenie = { blokada: 'nie' };
      // alert('Ogłoszenie odblokowane !!!');
      this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Ogłoszenie odblokowane !!!' });
    }
    this.bazaOgloszenService.updateOgloszenie(key, ogloszenie);
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
