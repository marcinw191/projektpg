export class Ogloszenie {
  tytul: string;
  opis: string;
  numerOgloszenia: number;
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

  constructor(tytul: string, opis: string, czasWykonania: number, telefon: number, maxCena: number, ulica: string, ulica_numer: number,
              miasto: string, koniecLicytacji: Date, dataPublikacji: Date, zlecajacy: string) {
    this.tytul = tytul;
    this.opis = opis;
    this.czasWykonania = czasWykonania;
    this.telefon = telefon;
    this.maxCena = maxCena;
    this.ulica = ulica;
    this.ulica_numer = ulica_numer;
    this.miasto = miasto;
    this.koniecLicytacji = koniecLicytacji;
    this.dataPublikacji = dataPublikacji;
    this.zlecajacy = zlecajacy;
  }

}
