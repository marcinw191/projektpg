import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { Uzytkownik }              from '../../klasy/uzytkownik';

@Component({
  selector: 'app-oferta-wykonania',
  templateUrl: './oferta-wykonania.component.html',
  styleUrls: ['./oferta-wykonania.component.css']
})
export class OfertaWykonaniaComponent implements OnInit, OnChanges {

  @Input() user_id: string;
  @Input() oferta: any;
  dataPublikacji: string;
  godzinaPublikacji: string;
  oferent: Uzytkownik;


  constructor(private bazaDanychUzytkownikow: BazaUzytkownikowService) {
    this.oferent = new Uzytkownik();
  }

  ngOnInit() {
    //pobierz oferenta z bazy
    this.bazaDanychUzytkownikow.getUserById(this.user_id).subscribe(user => {
      this.oferent.zaladujZBazy(user[0]);
    });

  }

  ngOnChanges(){
    this.dataPublikacji = this.oferta.dataPublikacji.split("T")[0];
    this.godzinaPublikacji = this.oferta.dataPublikacji.split("T")[1].split(".")[0];
  }

}
