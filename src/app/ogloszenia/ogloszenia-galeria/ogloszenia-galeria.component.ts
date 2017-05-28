import { Component, OnInit }   from '@angular/core';
import { AuthService }         from '../../serwisy/auth0/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

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


  constructor(private auth: AuthService, private db: AngularFireDatabase) {
    this.db.list('/ogloszenia').subscribe(queriedItems => {
      this.miniatury = queriedItems;
      this.miniaturyBezFiltrowania = queriedItems;
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
