import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

interface Oferta {
  oferent: string;
  cena: number;
  wiadomosc: string;
  telefon: number;
  numerOgloszenia: number;
  dataPublikacji: string;
}

@Injectable()
export class BazaOfertService {
  oferty: FirebaseListObservable<any[]>;
  oferta:  FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.oferty = this.db.list('/oferty') as FirebaseListObservable<Oferta[]>
  }

  getOferty(){
    return this.oferty;
  }

  getOfertaDetails(key){
    this.oferta = this.db.object('/oferty/'+key) as FirebaseObjectObservable<Oferta>
    return this.oferta;
  }

  getOfertaByOferent(oferent: string) {
    return this.oferty = this.db.list('/oferty', {
      query: {
        orderByChild: 'oferent',
        equalTo: oferent
      }
    });
  }

  getOfertaByOgloszenie(nr_ogloszenia: string) {
    //pobierz oferty zlozone pod danym ogloszenie,
    return this.oferty = this.db.list('/oferty', {
      query: {
        orderByChild: 'numerOgloszenia',
        equalTo: nr_ogloszenia,
      }
    });
  }

  getOfertyByUser(user_id: string) {
    //pobierz oferty zlozone przez danego oferenta,
    return this.oferty = this.db.list('/oferty', {
      query: {
        orderByChild: 'oferent',
        equalTo: user_id,
      }
    });
  }

  addOferta(oferta) {
    return this.oferty.push(oferta);
  }

  updateOferta(key, oferta){
    return this.oferty.update(key,oferta);
  }

  deleteOferta(key){
    return this.oferty.remove(key);
  }

}
