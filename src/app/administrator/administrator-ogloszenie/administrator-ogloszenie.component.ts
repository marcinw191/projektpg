import { Component, Input, OnInit } from '@angular/core';

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

  constructor(private bazaOgloszenService: BazaOgloszenService ) { }

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
      alert('Ogłoszenie zablokowane !!!');
    }
    else {
      ogloszenie = { blokada: 'nie' };
      alert('Ogłoszenie odblokowane !!!');
    }
    this.bazaOgloszenService.updateOgloszenie(key, ogloszenie);
  }

  deleteOgloszenie(key) {
    this.result = confirm('Czy usunąć ogłoszenie z bazy ?');
    if (this.result) {
      this.bazaOgloszenService.deleteOgloszenie(key);
    }
  }

}
