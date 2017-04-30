import { Component, OnInit } from '@angular/core';

import { AuthService }             from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

import { Profil }                  from './profil';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  users : any[];
  profil:Profil = {
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
  edycja:boolean;
  wybor:number = null;

  constructor(private auth: AuthService, private bazaUzytkownikowService:BazaUzytkownikowService){
  }

  ngOnInit() {
    this.edycja=false;
    // profil pobrany z cookie procesu auth0
    this.profil_auth = JSON.parse(localStorage.getItem('profile'));
    // pobranie bazy użytkowników i sprawdzenie, czy jest już taku użytkownik
    this.bazaUzytkownikowService.getUsers().subscribe(users =>
      {
      this.users = users;
        // porównanie adresu e-mail z autoryzacji z adresami e-mail z "bazy"
        for (var x=0; x<this.users.length; x++) {
          if (this.users[x].e_mail ==  this.profil_auth.email) {
            this.wybor=x;
          }
        }
        // jeśli adresy są identyczne, to pobierany jest profil z bazy
        if (this.wybor) {
          this.profil = this.users[this.wybor];
        }
        // jeśli adresu nie ma w bazie, to profil jest tworzony w bazie
        else {
          this.profil.zdjecie = this.profil_auth.picture;
          this.profil.nazwa = this.profil_auth.name;
          this.profil.e_mail = this.profil_auth.email;
          this.profil.typ = 'zleceniodawca';
          this.bazaUzytkownikowService.addUser(this.profil);
        }
      }
    );
  }
}
