import { Component, OnInit }   from '@angular/core';

import { AuthService }             from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

import { Profil }      from './profile';
// import { PROFILES }    from './profiles';

import * as moment from 'moment-timezone';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedProfil: Profil;
  profile:any;
  time:any;
  // id:number =0; //domyślnie przydzielony id rekordu statycznego z pustymi polami (z pliku profiles.ts)
  funkcjaDomyslna:string;
  users : any[];
  key : string ='';

  funkcje:Array<Object> = [
    {rola: "zleceniodawca", name: "zleceniodawca"},
    {rola: "wykonawca", name: "wykonawca"}
  ];

  constructor(private auth: AuthService, private bazaUzytkownikowService:BazaUzytkownikowService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    // console.log(this.profile);
    this.time = moment(this.profile.updated_at).tz("Europe/Warsaw").format('YYYY-MM-DD HH:mm:ss');
    // console.log(this.time);
  }

  changeRole() {
    // console.log(this.funkcjaDomyslna);
    this.selectedProfil.funkcja = this.funkcjaDomyslna;
  }

  ngOnInit(): void {
    // porównanie adresu e-mail z autoryzacji z adresami e-mail z "bazy"
    // jeśli adresy są identyczne, to pobierany jest id rekordu w bazie
    this.bazaUzytkownikowService.getUsers().subscribe(users => {
      this.users = users;
      console.log('Profil');
      console.log(this.users);
      for (var x=0; x<this.users.length; x++) {
        console.log(this.users[x].e_mail);
        console.log(this.profile.e_mail);
        if (this.users[x].e_mail ==  this.profile.e_mail) {
          this.key=this.users[x].$key;
        }
      }
      console.log('Key : '+this.key);
    })
    // przekopiowanie danych z bazy do zmiennej, której wartości są wyświetlane na stronie
    // this.selectedProfil = this.users[parseInt(this.id)];
    // this.selectedProfil = this.users[this.id];
    // // na razie na stałe przepisanie danych z autoryzacji do zmiennej, której wartości są wyświetlane na stronie
    // // if (this.selectedProfil.zdjecie=='') {
    // //   this.selectedProfil.zdjecie = this.profile.picture;}
    // if (this.selectedProfil.nazwa=='') {
    //   this.selectedProfil.nazwa   = this.profile.name;}
    // if (this.selectedProfil.email=='') {
    //   this.selectedProfil.email   = this.profile.email;}
    // if (this.selectedProfil.funkcja=='') {
    //   this.funkcjaDomyslna = 'zleceniodawca';
    //   this.selectedProfil.funkcja = this.funkcjaDomyslna;}
    //   else {this.funkcjaDomyslna=this.selectedProfil.funkcja;}
  }

  saveProfile(){
    alert('Profil zapisany');
  }

  cancelProfile(){
    alert('Zrezygnowano ze zmian w profilu');
  }

  listOfOrders(){
    alert('Przygotowywanie zestawienia zleceń');
  }

  listOfOfferts(){
    alert('Przygotowywanie zestawienia ofert');
  }
}
