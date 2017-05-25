import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profil-widok-przyciski',
  templateUrl: './profil-widok-przyciski.component.html',
  styleUrls: ['./profil-widok-przyciski.component.css']
})
export class ProfilWidokPrzyciskiComponent implements OnInit {
  @Input() profil_view: any;
  @Output() zestawienie  = new EventEmitter<any>();
  // przyjęta zasada :
  //  - zestawienie.typ = 0   - brak zestawienia
  //  - zestawienie.typ = 1   - zestawienie ogłoszeń/zleceń użytkownika
  //  - zestawienie.typ = 2   - zestawienie ofert użytkownika
  //  - zestawienie.typ = 3   - wejście w narzędzia administratora

  constructor() { }

  ngOnInit() {
  }

  listaOgloszen(){
    this.zestawienie.emit({typ: 1});
  }

  listaOfert(){
    this.zestawienie.emit({typ: 2});
  }

  Administrator(){
    this.zestawienie.emit({typ: 3});
  }

}
