import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})

export class AdministratorComponent implements OnInit {
  @Output() zestawienie  = new EventEmitter<any>();
  typ_zestawienia :number;
  // przyjęta zasada :
  //  - typ_zestawienia = 0   - brak zestawienia
  //  - typ_zestawienia = 1   - zestawienie użytkowników
  //  - typ_zestawienia = 2   - zestawienie ogłoszeń/zleceń
  //  - typ_zestawienia = 3   - zestawienie ofert

  constructor() {
  }

  ngOnInit() {
    this.typ_zestawienia=0;
  }

  zestawienie_uzytkownikow() {
    this.typ_zestawienia=1;
  }

  zestawienie_ogloszen() {
    this.typ_zestawienia=2;
  }

  zestawienie_ofert() {
    this.typ_zestawienia=3;
  }

  wyjscie() {
    this.zestawienie.emit({typ: 0});
  }

}
