import { Uzytkownik } from './uzytkownik';

export class Oferta {
  oferent: string;
  cena: number;
  wiadomosc: string;
  telefon: number;
  numerOgloszenia: number;
  dataPublikacji: string;

  constructor(oferent: string, cena: number, wiadomosc: string, telefon: number, nr_ogloszenia: number, dataPublikacji: string) {
    this.oferent = oferent;
    this.cena = cena;
    this.wiadomosc = wiadomosc;
    this.telefon = telefon;
    this.numerOgloszenia = nr_ogloszenia;
    this.dataPublikacji = dataPublikacji;
  }

}
