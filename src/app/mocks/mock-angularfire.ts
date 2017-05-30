import {isUndefined} from "util";
import {Observable} from 'rxjs';

export class MockAngularFireDatabase {

  private oferta: any;
  private user: any;
  private ogloszenie: any;

  constructor(oferta?: any, user?: any, ogloszenie?: any){
    if(isUndefined(oferta))
    {
      this.oferta = {
        cena: 400,
        dataPublikacji: "2017-05-11T18:34:01.485Z",
        numerOgloszenia: "2",
        oferent: "google-oauth2|114567725685047947770",
        telefon: "502876123",
        wiadomosc: "Chętnie obejrzę kuchnię i dogadamy się co do zakresu robót. Proszę o kontakt - mam wolne terminy.",
        $key: "-KjsmVR-PvKwC1Ec1eGd"

      };
    }
    else {
      this.oferta = oferta;
    }
    if(isUndefined(user)){
      this.user = {
        e_mail : "bartlomiej.kornowski@gmail.com",
        kod : "",
        miejscowosc : "",
        nazwa : "Bartłomiej Kornowski",
        nr_bud : "12",
        numer : 1,
        telefon : "",
        typ : "administrator",
        ulica : "Szczecinska",
        user_id : "google-oauth2|114567725685047947770",
        zdjecie : "https://lh4.googleusercontent.com/-E_whVjppYfU/AAAAAAAAAAI/AAAAAAAAA7A/1yYHBYCvDyc/photo.jpg",
        $key: "-KjXEepQgcIi081yulxV"
      };
    }
    else
    {
      this.user = user;
    }
    if(isUndefined(ogloszenie))
    {
      this.ogloszenie = {
        blokada : "nie",
        czasWykonania : 5,
        dataPublikacji : "2017-04-20T19:45:57.876Z",
        koniecLicytacji : "2017-04-22T00:00:00.000Z",
        maxCena : 2000,
        miasto : "Gdańsk",
        numerOgloszenia : 1,
        opis : "Witam,\nPotrzebuje zrobić kapitalny remont łazienki. W zakres robót wchodzą:\n - wymiana kafelek,\n - malowanie,\n - wymiana ceramiki (muszla, zlew)",
        pliki : [ "-KiBt_qDdRYl1vVdDFUl/img0.jpeg", "-KiBt_qDdRYl1vVdDFUl/img1.jpeg", "-KiBt_qDdRYl1vVdDFUl/img2.jpeg", "-KiBt_qDdRYl1vVdDFUl/img3.jpeg", "-KiBt_qDdRYl1vVdDFUl/img4.jpeg" ],
        telefon : "505322222",
        tytul : "Łazienka do kapitalnego remontu",
        ulica : "Bzowa",
        ulica_numer : 12,
        zlecajacy : "google-oauth2|114567725685047947770",
        $key: "-KiBt_qDdRYl1vVdDFUl"
      };
    }
    else {
      this.ogloszenie = ogloszenie;
    }
  }

  public getMock(): any {
    let _this = this;
    return {
      list: function(table, params) {
        if(table.indexOf('/oferty') != -1)
          return Observable.of([_this.oferta]);
        if(table.indexOf('/ogloszenia') != -1)
          return Observable.of([_this.ogloszenie]);
        if(table.indexOf('/users') != -1)
          return Observable.of([_this.user]);

      },
      object: function(table, params) {
        if(table.indexOf('/oferty') != -1)
          return Observable.of(_this.oferta);
        if(table.indexOf('/ogloszenia') != -1)
          return Observable.of(_this.ogloszenie);
        if(table.indexOf('/users') != -1)
          return Observable.of(_this.user);
      }
    }
  }

}
