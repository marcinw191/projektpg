import { Injectable } from '@angular/core';

@Injectable()
export class WalidacjaService {

  constructor() { }

  walidacja(typ:string, wartosc:string){
    // funkcja sprawdzająca poprawność "wartosc" dla pól typu :
    // - "kod pocztowy"    (w skrócie "kod")     : czy są to tylko cyfry i znak "-" oraz czy ma długość 6 znaków
    // - "nr telefonu"     (w skrócie "telefon") : czy są to tylko cyfry            oraz czy ma długość 9 znaków
    // - "adres e-mail"    (w skrócie "email")   : czy ciagi znaków rozdzielone są znakami @ i . oraz czy po ostatniej kropce są 2 lub 3 znaki
    // - "data RRRR-MM-DD" (w skrócie "dataRMD") : czy są to tylko cyfry i znak "-" w formacie XXXX-XX-XX oraz czy ma długość 10 znaków
    // - "data DD-MM-RRRR" (w skrócie "dataDMR") : czy są to tylko cyfry i znak "-" w formacie XX-XX-XXXX oraz czy ma długość 10 znaków
    // w odpowiedzi zwraca wartość true (gdy oba warunki są spełnione) lub false
    // docelowo można dodać dodatkowe typy pól
    let wzorzec;
    let dlugosc :boolean;

    if (typ=="kod") {
      wzorzec = /^\d{2}-\d{3}$/;
      dlugosc=((wartosc.length>=6)&&(wartosc.length<=6));}
    if (typ=="telefon") {
      wzorzec = /^\d{9}$/;
      dlugosc=((wartosc.length>=9)&&(wartosc.length<=9));}
    if (typ=="email") {
      wzorzec = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
      dlugosc=((wartosc.length>=6)&&(wartosc.length<=50));}
    if (typ=="dataRMD") {
      wzorzec = /^\d{4}\-\d{2}\-\d{2}$/;
      dlugosc=((wartosc.length>=10)&&(wartosc.length<=10));}
    if (typ=="dataDMR") {
      wzorzec = /^\d{2}\-\d{2}\-\d{4}$/;
      dlugosc=((wartosc.length>=10)&&(wartosc.length<=10));}
    return (dlugosc && wzorzec.test(wartosc));
  }

}
