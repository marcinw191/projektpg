import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { BazaOfertService }        from '../../serwisy/firebase-oferty/bazaofert.service';

@Component({
  selector: 'app-oferty-wykaz',
  templateUrl: './oferty-wykaz.component.html',
  styleUrls: ['./oferty-wykaz.component.css']
})
export class OfertyWykazComponent implements OnInit {
  @Input() profil: any;
  @Output() zestawienie  = new EventEmitter<any>();
  oferty: any[];
  komunikat: boolean;

  constructor(private bazaOfertService: BazaOfertService) { }

  ngOnInit() {
    this.bazaOfertService.getOfertyByUser(this.profil.user_id)
      .subscribe(oferty => {
        this.oferty = oferty;
        this.komunikat = (this.oferty.length == 0);
      });
  }

  powrot() {
    this.zestawienie.emit({typ: 0});
  }

}
