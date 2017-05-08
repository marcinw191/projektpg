import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import {consoleTestResultsHandler} from "tslint/lib/test";


@Component({
  selector: 'app-ogloszenie',
  templateUrl: './ogloszenie.component.html',
  styleUrls: ['./ogloszenie.component.css']
})
export class OgloszenieComponent implements OnInit {

  ogloszenie: FirebaseListObservable<any>;
  numerOgloszenia: number;
  tytul: string;
  telefon: string;
  opis: string;
  ulica: string;
  ulica_numer: string;
  dataPublikacji: string;
  godzinaPublikacji: string;
  koniecLicytacji: string;
  maxCena: number;
  zlecajacy: string;
  czasWykonania: number;
  miasto: string;
  istnieje: boolean;
  zdjecie0: string;
  zdjecie1: string;
  zdjecie2: string;
  zdjecie3: string;
  zdjecie4: string;
  adres: string;

  constructor(private route: ActivatedRoute, private af: AngularFire, @Inject(FirebaseApp) private fbApp: firebase.app.App) {
    this.zdjecie0 = "";
    this.zdjecie1 = "";
    this.zdjecie2 = "";
    this.zdjecie3 = "";
    this.zdjecie4 = "";
  }

  ngOnInit() {
    this.numerOgloszenia = this.route.snapshot.params.id;
    this.ogloszenie = this.af.database.list('/ogloszenia', {
      query: {
        orderByChild: 'numerOgloszenia',
        equalTo: +this.numerOgloszenia,
      }
    });
    this.ogloszenie.subscribe(queriedItems => {
      if(queriedItems.length == 1)
      {
        var __this = this;
        this.istnieje = true;
        this.tytul = queriedItems[0].tytul;
        this.telefon = queriedItems[0].telefon;
        this.opis = queriedItems[0].opis;
        this.ulica = queriedItems[0].ulica;
        this.ulica_numer = queriedItems[0].ulica_numer;
        this.miasto = queriedItems[0].miasto;
        this.dataPublikacji = queriedItems[0].dataPublikacji.split("T")[0];
        this.godzinaPublikacji = queriedItems[0].dataPublikacji.split("T")[1].split(".")[0];
        this.koniecLicytacji = queriedItems[0].koniecLicytacji;
        this.maxCena = queriedItems[0].maxCena;
        this.zlecajacy = queriedItems[0].zlecajacy;
        this.czasWykonania = queriedItems[0].czasWykonania;
        this.adres = this.ulica + " " + this.ulica_numer + " , " + this.miasto;
        console.log(this.adres);
        if(queriedItems[0].pliki.length > 0)
        {
          for(let i = 0; i < queriedItems[0].pliki.length; i++)
          {
            this.fbApp.storage().ref().child(queriedItems[0].pliki[i]).getDownloadURL().then(function(url)
              {
                for(let prop of Object.keys(__this))
                  if(prop.indexOf("zdjecie" + i) !== -1)
                    __this[prop] = url;
              }
            ).catch(function(error)
            {
              console.log(error);
            });
          }
          if(queriedItems[0].pliki.length < 5)
            for(let i = queriedItems[0].pliki.length - 1; i < 5; i++)
              for(let prop of Object.keys(__this))
                if(prop.indexOf("zdjecie" + i) !== -1)
                  __this[prop] = "";
        }
      }
      else
      {
        this.istnieje = false;
      }
    });
  }

}
