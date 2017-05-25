import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Uzytkownik} from '../../klasy/uzytkownik';

@Component({
  selector: 'app-profil-edycja',
  templateUrl: './profil-edycja.component.html',
  styleUrls: ['./profil-edycja.component.css']
})
export class ProfilEdycjaComponent implements OnInit {
  @Input() profil_edit: any;
  @Output() edycja_stan  = new EventEmitter<any>();
  @Output() profil_zm = new EventEmitter<any>();

  private edit_telefon: string;
  private edit_kod: string;
  private profil_temp: Uzytkownik;

  constructor() { }

  ngOnInit() {
    this.profil_temp=this.profil_edit;
    this.edit_telefon=this.profil_temp.telefon;
    this.edit_kod=this.profil_temp.kod;
  }

  powrotProfil(){
    this.edycja_stan.emit({stan: false});
  }

  zapiszProfil(){
    if (((this.walidacja("telefon",this.edit_telefon)) || (this.edit_telefon.length==0)) &&
      ((this.walidacja("kod",this.edit_kod))         || (this.edit_kod.length==0))) {
      this.profil_edit.telefon=this.edit_telefon;
      this.profil_edit.kod=this.edit_kod;
      this.profil_zm.emit({profil: this.profil_temp});
    }
    else {
      if (!this.walidacja("telefon",this.edit_telefon)) {
        alert('Numer telefonu niepoprawny');
        this.edit_telefon=this.profil_edit.telefon;
      }
      if (!this.walidacja("kod",this.edit_kod)) {
        alert('Kod pocztowy niepoprawny');
        this.edit_kod=this.profil_edit.kod;
      }
    }
  }

  walidacja(typ:string, wartosc:string){
    // funkcja sprawdzająca poprawność "wartosc" dla pól typu :
    // - "kod pocztowy" (w skrócie "kod")     : czy są to tylko cyfry i znak "-" oraz czy ma długość 6 znaków
    // - "nr telefonu"  (w skrócie "telefon") : czy są to tylko cyfry            oraz czy ma długość 9 znaków
    // w odpowiedzi zwraca wartość true (gdy oba warunki są spełnione) lub false
    // docelowo można dodać dodatkowe typy pól
    let wzorzec;
    let dlugosc :boolean;
    // for (let i=0;length.walidacja_wzorzec;i++){
    // }
    if (typ=="kod") {
      wzorzec = /^\d{2}-\d{3}$/;
      dlugosc=((wartosc.length>=6)&&(wartosc.length<=6));}
    if (typ=="telefon") {
      wzorzec = /^\d{9}$/;
      dlugosc=((wartosc.length>=9)&&(wartosc.length<=9));}
    return (dlugosc && wzorzec.test(wartosc));
  }

}
