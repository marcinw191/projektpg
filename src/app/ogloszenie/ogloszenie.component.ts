import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { AuthService }             from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';
import { Uzytkownik } from '../klasy/uzytkownik';
import { Oferta } from '../klasy/oferta';


@Component({
  selector: 'app-ogloszenie',
  templateUrl: './ogloszenie.component.html',
  styleUrls: ['./ogloszenie.component.css']
})
export class OgloszenieComponent implements OnInit {

  ogloszenie: FirebaseListObservable<any>;
  oferty: FirebaseListObservable<any>;
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
  email: string;
  zlecajacy: Uzytkownik;
  oferent: Uzytkownik;
  czasWykonania: number;
  miasto: string;
  istnieje: boolean;
  zdjecie0: string;
  zdjecie1: string;
  zdjecie2: string;
  zdjecie3: string;
  zdjecie4: string;
  adres: string;
  oferta: any;
  oferta_dodana: boolean;
  oferta_status: string;
  oferta_text: string;

  constructor(private route: ActivatedRoute,
              private af: AngularFire,
              @Inject(FirebaseApp) private fbApp: firebase.app.App,
              private bazaDanychUzytkownikow: BazaUzytkownikowService,
              private auth: AuthService
    ) {
    this.zdjecie0 = "";
    this.zdjecie1 = "";
    this.zdjecie2 = "";
    this.zdjecie3 = "";
    this.zdjecie4 = "";
    this.zlecajacy = new Uzytkownik();
    this.oferent = new Uzytkownik();
    this.oferta = {};
    this.oferta_dodana = false;
  }

  ngOnInit() {

    //pobierz obecnego uzytkownika(oferenta) z bazy
    if(this.auth.authenticated())
    {
      this.bazaDanychUzytkownikow.getUserByEmail(this.auth.getProfileAuth().email).subscribe(user => {
        this.oferent.zaladujZBazy(user[0]);
      });
    }

    //pobierz dane ogloszenia z bazy
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
        this.email = queriedItems[0].zlecajacy;
        this.czasWykonania = queriedItems[0].czasWykonania;
        this.adres = this.ulica + " " + this.ulica_numer + ", " + this.miasto;

        //pobierz uzytkownika zlecajacego z bazy
        this.bazaDanychUzytkownikow.getUserByEmail(this.email).subscribe(user => {
          __this.zlecajacy.zaladujZBazy(user[0]);
        });

        //pobierz zdjęcia z firebase storage
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

        //pobierz oferty zlozone pod danym ogloszenie,
        this.oferty = this.af.database.list('/oferty', {
          query: {
            orderByChild: 'numerOgloszenia',
            equalTo: this.numerOgloszenia,
          }
        });
      }
      else
      {
        this.istnieje = false;
      }
    });
  }

  public dodajOferte()
  {
    let _this = this;
    let oferta = new Oferta(this.oferent.email,
                        this.oferta.cena,
                        this.oferta.wiadomosc,
                        this.oferta.telefon,
                        this.numerOgloszenia,
                        new Date().toISOString()
                        );

    let oferty = this.af.database.list('/oferty');
    oferty.push(oferta).then(function(data){
      _this.wyczyscOferte();
      _this.oferta_dodana = true;
      _this.oferta_status = 'success';
      _this.oferta_text = "Oferta dodana poprawnie.";
    }).catch(function(){
      _this.wyczyscOferte();
      _this.oferta_dodana = true;
      _this.oferta_status = 'error';
      _this.oferta_text = "Dodawanie oferty nie powiodło się. Proszę spróbować ponownie.";
    });

  }

  private wyczyscOferte()
  {
    this.oferta = {};
  }

}
