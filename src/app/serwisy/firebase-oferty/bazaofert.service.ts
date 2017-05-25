import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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

  constructor(private af:AngularFire) {
    this.oferty = this.af.database.list('/oferty') as FirebaseListObservable<Oferta[]>
  }

  getOferty(){
    return this.oferty;
  }

  getOfertaDetails(key){
    this.oferta = this.af.database.object('/oferty/'+key) as FirebaseObjectObservable<Oferta>
    return this.oferta;
  }

  getOfertaByOferent(oferent: string) {
    return this.oferty = this.af.database.list('/oferty', {
      query: {
        orderByChild: 'oferent',
        equalTo: oferent
      }
    });
  }

  getOfertaByOgloszenie(nr_ogloszenia: string) {
    //pobierz oferty zlozone pod danym ogloszenie,
    return this.oferty = this.af.database.list('/oferty', {
      query: {
        orderByChild: 'numerOgloszenia',
        equalTo: nr_ogloszenia,
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
