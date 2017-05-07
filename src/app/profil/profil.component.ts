import { Component, OnInit } from '@angular/core';
import { Router}             from '@angular/router';

import { AuthService }             from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

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
  edycja:boolean;
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
          // porównanie adresu e-mail z autoryzacji z adresami e-mail z "bazy"
          for (let x=0; x<this.users.length; x++) {
            if (this.users[x].e_mail ==  this.profil_auth.email) {
              this.wybor=x;
            }
          }
          // jeśli adresu nie ma w bazie, to profil jest tworzony w bazie
          if (this.wybor == null)  {
            this.profil.zdjecie = this.profil_auth.picture;
            this.profil.nazwa = this.profil_auth.name;
            this.profil.e_mail = this.profil_auth.email;
            this.profil.typ = 'zleceniodawca';
            this.bazaUzytkownikowService.addUser(this.profil);
          }
          // jeśli adresy są identyczne, to pobierany jest profil z bazy
          else {
            this.profil = this.users[this.wybor];
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
    this.bazaUzytkownikowService.updateUser(this.profil.$key,this.profil);
    alert('Profil zapisany');
  }

}
