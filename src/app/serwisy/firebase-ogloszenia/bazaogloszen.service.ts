import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

interface Ogloszenie {
  tytul: string;
  opis: string;
  czasWykonania: number;
  telefon: number;
  maxCena: number;
  ulica: string;
  ulica_numer: number;
  miasto: string;
  koniecLicytacji: Date;
  dataPublikacji: Date;
  zlecajacy: string;
  pliki: Array<File>;
}

@Injectable()
export class BazaOgloszenService {
  ogloszenia: FirebaseListObservable<any[]>;
  ogloszenie:  FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af:AngularFire) {
    this.folder = 'ogloszenieimages';
    this.ogloszenia  = this.af.database.list('/ogloszenia') as FirebaseListObservable<Ogloszenie[]>
  }

  getOgloszenia(){
    return this.ogloszenia;
  }

  // getOgloszeniaByUserKey(userKey){
  //   var ogloszenia_uzytkownika: Array<any>;
  //   ogloszenia_uzytkownika = this.af.database.list('/ogloszenia', {
  //     query: {
  //       orderByChild: 'zlecajacy',
  //       equalTo: userKey
  //     }
  //   });
  //   return ogloszenia_uzytkownika;
  // }

  getOgloszenieDetails(key){
    this.ogloszenie = this.af.database.object('/ogloszenia/'+key) as FirebaseObjectObservable<Ogloszenie>
    return this.ogloszenie;
  }

  getOgloszenieByTytul(tytul: string) {
    return this.ogloszenia = this.af.database.list('/ogloszenia', {
      query: {
        orderByChild: 'tytul',
        equalTo: tytul
      }
    });
  }

  addogloszenie(ogloszenie) {
    return this.ogloszenia.push(ogloszenie);
  }

  updateOgloszenie(key, ogloszenie){
    return this.ogloszenia.update(key,ogloszenie);
  }

  deleteOgloszenie(key){
    return this.ogloszenia.remove(key);
  }

}
