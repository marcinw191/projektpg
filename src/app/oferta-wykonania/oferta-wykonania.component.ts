import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Oferta } from '../klasy/oferta';
import { Uzytkownik } from '../klasy/uzytkownik';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

@Component({
  selector: 'app-oferta-wykonania',
  templateUrl: './oferta-wykonania.component.html',
  styleUrls: ['./oferta-wykonania.component.css']
})
export class OfertaWykonaniaComponent implements OnInit, OnChanges {

  @Input() email: string;
  @Input() oferta: any;
  dataPublikacji: string;
  godzinaPublikacji: string;
  oferent: Uzytkownik;


  constructor(private bazaDanychUzytkownikow: BazaUzytkownikowService) {
    this.oferent = new Uzytkownik();
  }

  ngOnInit() {
    //pobierz oferenta z bazy
    this.bazaDanychUzytkownikow.getUserByEmail(this.email).subscribe(user => {
      this.oferent.zaladujZBazy(user[0]);
    });

  }

  ngOnChanges(){
    this.dataPublikacji = this.oferta.dataPublikacji.split("T")[0];
    this.godzinaPublikacji = this.oferta.dataPublikacji.split("T")[1].split(".")[0];
  }

}
