import { Component, OnInit } from '@angular/core';
import { Router}             from '@angular/router';
import { DialogService }     from 'ngx-bootstrap-modal';

import { options }                 from '../app-variables';
import { AuthService }             from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  private users : any[];
  private profil: any = {
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
  private profil_auth: any;
  private edycja: boolean;
  private typ_zestawienia: number = 0;
  private wybor: number = null;
  private opcje: any = options;

  constructor(private auth: AuthService,
              private bazaUzytkownikowService:BazaUzytkownikowService,
              private router: Router,
              public dialogService: DialogService) {
  }

  ngOnInit() {
    if (this.auth.authenticated()) {
      this.edycja = false;
      // profil pobrany z pliku cookie procesu auth0
      this.profil_auth = this.auth.getProfileAuth();
      // pobranie profilu z bazy użytkowników na podstawie adresu e-mail
      this.bazaUzytkownikowService.getUsers().subscribe(users =>
      {
        this.users = users;
        // porównanie id z autoryzacji z id z "bazy"
        for (let x = 0; x < this.users.length; x++) {
          if (this.users[x].user_id == this.profil_auth.sub) {
            this.wybor = x;
            this.profil = this.users[this.wybor];
          }
        }
      });
    }
    else {
      this.opcje.icon = 'error';
      this.dialogService.alert('','Nie jesteś zalogowany !!!',this.opcje);
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
    this.opcje.icon = 'success';
    this.dialogService.alert('','Profil zapisany',this.opcje);
  }

}
