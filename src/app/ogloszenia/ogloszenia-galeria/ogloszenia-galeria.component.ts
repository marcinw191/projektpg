import { Component, OnInit }   from '@angular/core';
import { AuthService }         from '../../serwisy/auth0/auth.service';
import { BazaOgloszenService } from  '../../serwisy/firebase-ogloszenia/bazaogloszen.service';

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


  constructor(private auth: AuthService,
              private bazaOgloszenService: BazaOgloszenService) {
    this.bazaOgloszenService.getOgloszenia().subscribe(queriedItems => {
      this.miniaturyBezFiltrowania = queriedItems;
      for (let i = this.miniaturyBezFiltrowania.length-1; i >= 0; i--) {
        if (this.miniaturyBezFiltrowania[i].blokada == 'tak') {
          this.miniaturyBezFiltrowania.splice(i, 1);
        }
      }
      this.miniatury = this.miniaturyBezFiltrowania;
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
  }

  public wyczyscSzukanie(){
    this.miniatury = this.miniaturyBezFiltrowania;
    this.pofiltrowane = false;
    this.fraza = "";
  }

  ngOnInit() {
  }

}
