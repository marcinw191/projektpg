import { Component, OnInit } from '@angular/core';

import { BazaOfertService } from '../../serwisy/firebase-oferty/bazaofert.service';

@Component({
  selector: 'app-administrator-oferty',
  templateUrl: './administrator-oferty.component.html',
  styleUrls: ['./administrator-oferty.component.css']
})
export class AdministratorOfertyComponent implements OnInit {
  oferty: any[];

  constructor(private bazaOfertService: BazaOfertService) { }

  ngOnInit() {
    this.bazaOfertService.getOferty().subscribe(oferty => {
      this.oferty = oferty.sort(function(a, b){
        return Number(a.numerOgloszenia)-Number(b.numerOgloszenia)
      });
    });
  }

}
