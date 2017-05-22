import { Component, OnInit } from '@angular/core';
import { Router}             from '@angular/router';

import { AuthService }             from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  users : any[];
  profil: any = {
    zdjecie     : '',
    nazwa       : '',
    e_mail      : '',
    typ         : '',
    telefon     : '',
    ulica       : '',
    nr_bud      : '',
    kod         : '',
    miejscowosc : '',
  };
  profil_auth: any;
  edit_nazwa: string;
  edit_typ: string;
  edit_telefon: string;
  edit_ulica: string;
  edit_nr_bud: string;
  edit_kod: string;
  edit_miejscowosc: string;
  edycja:boolean;
  wybor:number = null;

  constructor(private auth: AuthService,
              private bazaUzytkownikowService: BazaUzytkownikowService,
              private router: Router){
  }

  ngOnInit() {
    if (this.auth.authenticated()) {
      this.edycja=false;
      // profil pobrany z pliku cookie procesu auth0
      this.profil_auth = this.auth.getProfileAuth();
      // pobranie profilu z bazy użytkowników na podstawie adresu e-mail
      this.bazaUzytkownikowService.getUsers().subscribe(users =>
        {
          this.users = users;
          // porównanie adresu e-mail z autoryzacji z adresami e-mail z "bazy"
          for (let x=0; x<this.users.length; x++) {
            if (this.users[x].e_mail ==  this.profil_auth.email) {
              this.wybor=x;
              this.profil = this.users[this.wybor];
            }
          }
        }
      );
    }
    else {
      alert('Nie jesteś zalogowany !!!');
      this.router.navigateByUrl('/');
    }
  }

  edytujProfil(){
    this.edit_nazwa=this.profil.nazwa;
    this.edit_typ=this.profil.typ;
    this.edit_telefon=this.profil.telefon;
    this.edit_ulica=this.profil.ulica;
    this.edit_nr_bud=this.profil.nr_bud;
    this.edit_telefon=this.profil.telefon;
    this.edit_kod=this.profil.kod;
    this.edit_miejscowosc=this.profil.miejscowosc;
    this.edycja=true;
  }

  powrotProfil(){
    this.edycja=false;
  }

  listaOgloszen(){
    alert('Przygotowywanie zestawienia zleceń');
  }

  listaOfert(){
    alert('Przygotowywanie zestawienia ofert');
  }

  Administrator(){
    this.router.navigateByUrl('/administrator');
  }

  zapiszProfil(){
    if (((this.walidacja("telefon",this.edit_telefon)) || (this.edit_telefon.length==0)) &&
      ((this.walidacja("kod",this.edit_kod))         || (this.edit_kod.length==0))) {
      this.profil.nazwa=this.edit_nazwa;
      this.profil.typ=this.edit_typ;
      this.profil.telefon=this.edit_telefon;
      this.profil.ulica=this.edit_ulica;
      this.profil.nr_bud=this.edit_nr_bud;
      this.profil.telefon=this.edit_telefon;
      this.profil.kod=this.edit_kod;
      this.profil.miejscowosc=this.edit_miejscowosc;
      this.bazaUzytkownikowService.updateUser(this.profil.$key,this.profil);
      alert('Profil zapisany');
    }
    else {
      if (!this.walidacja("telefon",this.edit_telefon)) {
        alert('Numer telefonu niepoprawny');
        this.edit_telefon=this.profil.telefon;
      }
      if (!this.walidacja("kod",this.edit_kod)) {
        alert('Kod pocztowy niepoprawny');
        this.edit_kod=this.profil.kod;
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
