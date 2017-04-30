import { Component, OnInit } from '@angular/core';
import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

@Component({
  selector: 'app-dodajuzytkownika',
  templateUrl: './dodajuzytkownika.component.html',
  styleUrls: ['./dodajuzytkownika.component.css']
})
export class DodajUzytkownikaComponent implements OnInit {
  nazwa     : string;
  e_mail    : string;
  typ       : string;
  id_zlecen : Array<string>;
  id_ofert  : Array<string>;

  constructor(private bazaUzytkownikowService:BazaUzytkownikowService) { }

  ngOnInit() {
    console.log('Add user');
    this.nazwa = '';
    this.e_mail = '';
    this.typ = '';
    // this.id_zlecen;
    // this.id_ofert;
  }

  onAddSubmit(){
    let user = {
      nazwa: this.nazwa,
      e_mail: this.e_mail,
      typ: this.typ,
    };
    this.bazaUzytkownikowService.addUser(user);
    this.nazwa = '';
    this.e_mail = '';
    this.typ = '';
  }

}
