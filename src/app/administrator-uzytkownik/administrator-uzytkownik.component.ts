import { Component, Input, OnInit } from '@angular/core';

import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

@Component({
  selector: 'app-administrator-uzytkownik',
  templateUrl: './administrator-uzytkownik.component.html',
  styleUrls: ['./administrator-uzytkownik.component.css'],
  inputs: ['key'],
})
export class AdministratorUzytkownikComponent implements OnInit {
  @Input() key;
  user   :any;
  result :boolean;
  blokada :boolean = false;

  constructor(private bazaUzytkownikowService:BazaUzytkownikowService) { }

  ngOnInit() {
    this.bazaUzytkownikowService.getUserDetails(this.key).subscribe(user =>
    { this.user = user;
      this.blokada = (this.user.blokada == "tak");
    });
  }

  updateUser(key){
    let user = { typ: this.user.typ };
    this.bazaUzytkownikowService.updateUser(key, user);
    alert('Typ użytkownika zmieniony !!!');
  }

  blockUser(key){
    let user: any;
    console.log(this.blokada);
    console.log(this.key);
    if (this.blokada) {
      user = { blokada: 'tak' };
      alert('Użytkownik zablokowany !!!');
    }
    else {
      user = { blokada: 'nie' };
      alert('Użytkownik odblokowany !!!');
    }
    this.bazaUzytkownikowService.updateUser(key, user);
  }

  deleteUser(key) {
    this.result = confirm('Czy usunąć użytkownika z bazy ?');
    if (this.result) {
      this.bazaUzytkownikowService.deleteUser(key);
    }
  }

}
