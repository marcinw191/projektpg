import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';

@Component({
  selector: 'app-ogloszenia-wykaz',
  templateUrl: './ogloszenia-wykaz.component.html',
  styleUrls: ['./ogloszenia-wykaz.component.css']
})
export class OgloszeniaWykazComponent implements OnInit {
  @Input() profil: any;
  @Output() zestawienie  = new EventEmitter<any>();
  ogloszenia: any[];
  komunikat: boolean;

  constructor(private bazaOgloszenService: BazaOgloszenService){
  }

  ngOnInit() {
    this.bazaOgloszenService.getOgloszeniaByUser(this.profil.user_id)
      .subscribe(ogloszenia => {
        this.ogloszenia = ogloszenia;
        this.komunikat = (this.ogloszenia.length == 0);
      });
  }

  powrot() {
    this.zestawienie.emit({typ: 0});
  }

}
