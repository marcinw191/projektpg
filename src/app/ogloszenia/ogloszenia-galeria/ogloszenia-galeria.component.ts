import { Component, OnInit }   from '@angular/core';
import { AuthService }         from '../../serwisy/auth0/auth.service';
import { BazaOgloszenService } from '../../serwisy/firebase-ogloszenia/bazaogloszen.service';
import { PagerService }        from '../../serwisy/pager/pager.service';

@Component({
  selector: 'app-galeria-ogloszen',
  templateUrl: './ogloszenia-galeria.component.html',
  styleUrls: ['./ogloszenia-galeria.component.css']
})
export class GaleriaOgloszenComponent implements OnInit {

  fraza: string;
  orientacja: string = 'galeria';
  miniatury: Array<any>;
  miniaturyBezFiltrowania: Array<any>;
  pofiltrowane: boolean;
  ilosc_ogloszen: number = 4;

  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];


  constructor(private auth: AuthService,
              private bazaOgloszenService: BazaOgloszenService,
              private pagerService: PagerService) {
    this.bazaOgloszenService.getOgloszenia().subscribe(queriedItems => {
      this.miniaturyBezFiltrowania = queriedItems;
      for (let i = this.miniaturyBezFiltrowania.length-1; i >= 0; i--) {
        if (this.miniaturyBezFiltrowania[i].blokada == 'tak') {
          this.miniaturyBezFiltrowania.splice(i, 1);
        }
      }
      this.miniatury = this.miniaturyBezFiltrowania;
      this.stronicuj();
      // initialize to page 1
      this.setPage(1);
    });
    this.pofiltrowane = false;
  }

  public zmienOrientacje(orientacja: string) {
    this.orientacja = orientacja;
  }

  public szukaj() {
    this.pofiltrowane = true;
    this.miniatury = this.miniaturyBezFiltrowania.filter(ogloszenie => {
      let tytul = ogloszenie.tytul.toLowerCase();
      if (tytul.indexOf(this.fraza.toLowerCase())!= -1)
        return true;
      else
        return false;
    });
    this.stronicuj();
  }

  public wyczyscSzukanie(){
    this.miniatury = this.miniaturyBezFiltrowania;
    this.pofiltrowane = false;
    this.fraza = "";
    this.stronicuj();
  }

  ngOnInit() {
  }

  private stronicuj(){
    this.allItems = this.miniatury;
  }

  private setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.miniatury.length, page, Number(this.ilosc_ogloszen));
    // get current page of items
    this.pagedItems = this.miniatury.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
