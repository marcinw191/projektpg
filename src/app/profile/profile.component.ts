import { Component, OnInit }   from '@angular/core';

import { Profil }      from './profile';
import { PROFILES }    from './profiles';

import { AuthService } from '../auth0/auth.service';

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
  id:string ='0'; //domyślnie przydzielony id rekordu statycznego z pustymi polami (z pliku profiles.ts)
  funkcjaDomyslna:string;


  funkcje:Array<Object> = [
    {rola: "zleceniodawca", name: "zleceniodawca"},
    {rola: "wykonawca", name: "wykonawca"}
  ];

  constructor(private auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    // console.log(this.profile);
    this.time = moment(this.profile.updated_at).tz("Europe/Warsaw").format('YYYY-MM-DD HH:mm:ss');
    // console.log(this.time);
  }

  changeRole() {
    console.log(this.funkcjaDomyslna);
    this.selectedProfil.funkcja = this.funkcjaDomyslna;
  }

  ngOnInit(): void {
    // porównanie adresu e-mail z autoryzacji z adresami e-mail z "bazy"
    // jeśli adresy są identyczne, to pobierany jest id rekordu w bazie
    for (var x=0; x<PROFILES.length; x++) {
      if (PROFILES[x].email ==  this.profile.email) {
        this.id=PROFILES[x].id;
      }
    }
    // przekopiowanie danych z bazy do zmiennej, której wartości są wyświetlane na stronie
    this.selectedProfil         = PROFILES[parseInt(this.id)];
    // na razie na stałe przepisanie danych z autoryzacji do zmiennej, której wartości są wyświetlane na stronie
    if (this.selectedProfil.zdjecie=='') {
      this.selectedProfil.zdjecie = this.profile.picture;}
    if (this.selectedProfil.nazwa=='') {
      this.selectedProfil.nazwa   = this.profile.name;}
    if (this.selectedProfil.email=='') {
      this.selectedProfil.email   = this.profile.email;}
    if (this.selectedProfil.funkcja=='') {
      this.funkcjaDomyslna = 'zleceniodawca';
      this.selectedProfil.funkcja = this.funkcjaDomyslna;}
      else {this.funkcjaDomyslna=this.selectedProfil.funkcja;}
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
