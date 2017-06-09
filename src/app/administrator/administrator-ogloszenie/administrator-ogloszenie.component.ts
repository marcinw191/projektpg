import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'ngx-bootstrap-modal';

import { options } from '../../app-variables';
import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';

@Component({
  selector: 'app-administrator-ogloszenie',
  templateUrl: './administrator-ogloszenie.component.html',
  styleUrls: ['./administrator-ogloszenie.component.css'],
})

export class AdministratorOgloszenieComponent implements OnInit {
  @Input() key;
  public ogloszenie: any;
  private result: boolean;
  private blokada: boolean = false;
  private opcje: any = options;

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
      this.opcje.icon = 'success';
      this.dialogService.alert('', 'Ogłoszenie zablokowane !!!', this.opcje);
    }
    else {
      ogloszenie = { blokada: 'nie' };
      this.opcje.icon = 'success';
      this.dialogService.alert('', 'Ogłoszenie odblokowane !!!', this.opcje);
    }
    this.bazaOgloszenService.updateOgloszenie(key, ogloszenie);
  }

  deleteOgloszenie(key) {
    this.opcje.icon = 'question';
    this.opcje.confirmButtonText = 'Usuń';
    this.opcje.cancelButtonText = 'Powrót';
    this.dialogService.confirm('', 'Czy usunąć ogłoszenie z bazy ?', this.opcje).then((res: any) => {
      this.result = res;
      if (this.result) {
        this.bazaOgloszenService.deleteOgloszenie(key);
      }
    });
  }

}
