import { Component, OnInit, OnChanges }   from '@angular/core';
import { AuthService }         from '../serwisy/auth0/auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-galeria-ogloszen',
  templateUrl: './galeria-ogloszen.component.html',
  styleUrls: ['./galeria-ogloszen.component.css']
})
export class GaleriaOgloszenComponent implements OnInit {

  fraza: string;
  orientacja: string = 'galeria';
  miniatury: Array<any>;
  miniaturyBezFiltrowania: Array<any>;
  pofiltrowane: boolean;


  constructor(private auth: AuthService, private af: AngularFire) {
    this.af.database.list('/ogloszenia').subscribe(queriedItems => {
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
