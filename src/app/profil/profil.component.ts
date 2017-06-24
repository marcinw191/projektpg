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
  private edycja_button: boolean;
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
      this.bazaUzytkownikowService.getUserById(this.profil_auth.sub).subscribe(users => {
        if (users.length > 0) {
          this.profil = users[0];
          this.edycja_button = true;
        }
        else {
          this.profil.nazwa = "Nie ma takiego użytkownika !!!";
          this.profil.zdjecie = "../assets/img/Error.png";
          this.edycja_button = false;
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
