import { Component, OnInit } from '@angular/core';

import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';

@Component({
  selector: 'app-administrator-ogloszenia',
  templateUrl: './administrator-ogloszenia.component.html',
  styleUrls: ['./administrator-ogloszenia.component.css']
})
export class AdministratorOgloszeniaComponent implements OnInit {
  ogloszenia: any[];

  constructor(private bazaOgloszenService: BazaOgloszenService) { }

  ngOnInit() {
    this.bazaOgloszenService.getOgloszenia().subscribe(ogloszenia => {
      this.ogloszenia = ogloszenia;
    });
  }

}
