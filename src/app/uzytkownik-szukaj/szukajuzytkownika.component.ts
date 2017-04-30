import { Component, OnInit } from '@angular/core';
import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

@Component({
  selector: 'app-szukajuzytkownika',
  templateUrl: './szukajuzytkownika.component.html',
  styleUrls: ['./szukajuzytkownika.component.css']
})
export class SzukajUzytkownikaComponent implements OnInit {
  user   :any;
  e_mail :string;
  key    :string;
  nazwa  :string;
  typ    :string;

  constructor(private bazaUzytkownikowService: BazaUzytkownikowService) {
  }

  ngOnInit(){
  }

  onSearchSubmit(){
    this.bazaUzytkownikowService.getUserByEmail(this.e_mail).subscribe(
      result => {
        this.user = result[0];
        this.key=result[0].$key;
        this.nazwa=this.user.nazwa;
        this.typ=this.user.typ;
      });
  }
}
