import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

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

  constructor(private db: AngularFireDatabase) {
    this.folder = 'ogloszenieimages';
    this.ogloszenia  = this.db.list('/ogloszenia') as FirebaseListObservable<Ogloszenie[]>
  }

  getOgloszenia(){
    this.ogloszenia  = this.db.list('/ogloszenia') as FirebaseListObservable<Ogloszenie[]>
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
    this.ogloszenie = this.db.object('/ogloszenia/'+key) as FirebaseObjectObservable<Ogloszenie>;
    return this.ogloszenie;
  }

  getOgloszenieByTytul(tytul: string) {
    return this.ogloszenia = this.db.list('/ogloszenia', {
      query: {
        orderByChild: 'tytul',
        equalTo: tytul
      }
    });
  }

  getOgloszenieByNumer(numer: number) {
    return this.ogloszenia = this.db.list('/ogloszenia', {
      query: {
        orderByChild: 'numerOgloszenia',
        equalTo: numer
      }
    });
  }

  getOgloszeniaByUser(user_id: string) {
    return this.ogloszenia = this.db.list('/ogloszenia', {
      query: {
        orderByChild: 'zlecajacy',
        equalTo: user_id
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
