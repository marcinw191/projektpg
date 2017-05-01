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
  user :any;
  result :boolean;

  constructor(private bazaUzytkownikowService:BazaUzytkownikowService) { }

  ngOnInit() {
    this.bazaUzytkownikowService.getUserDetails(this.key).subscribe(user =>
    { this.user = user;
    });
  }

  onEditSubmit(key){
    let user = {
      nazwa: this.user.nazwa,
      typ:   this.user.typ,
    };
    this.bazaUzytkownikowService.updateUser(key, user);
  }

  blockUser(key){
    let user = {
      blokada: 'tak',
    };
    this.bazaUzytkownikowService.updateUser(key, user);
    alert('Użytkownik zablokowany !!!');
  }

  unblockUser(key){
    let user = {
      blokada: 'nie',
    };
    this.bazaUzytkownikowService.updateUser(key, user);
    alert('Użytkownik odblokowany !!!');
  }

  deleteUser(key) {
    this.result = confirm('Czy usunąć użytkownika z bazy ?');
    if (this.result) {
      this.bazaUzytkownikowService.deleteUser(key);
    }

  }
}
