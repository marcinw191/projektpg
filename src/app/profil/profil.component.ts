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
    user_id     : '',
  };
  profil_auth: any;
  edycja: boolean;
  typ_zestawienia: number = 0;
  wybor:number = null;

  constructor(private auth: AuthService,
              private bazaUzytkownikowService:BazaUzytkownikowService,
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
        // porównanie id z autoryzacji z id z "bazy"
        for (let x=0; x<this.users.length; x++) {
          if (this.users[x].user_id ==  this.profil_auth.sub) {
            this.wybor=x;
            this.profil = this.users[this.wybor];
          }
        }
      });
    }
    else {
      alert('Nie jesteś zalogowany !!!');
      this.router.navigateByUrl('/');
    }
  }

  updateStanEdycja(event:any) {
    this.edycja = event.stan;
  }

  updateTypZestawienia(event:any) {
    this.typ_zestawienia = event.typ;
  }

  updateProfil(event:any) {
    this.profil = event.profil;
    this.bazaUzytkownikowService.updateUser(this.profil.$key,this.profil);
    alert('Profil zapisany');
  }

}
