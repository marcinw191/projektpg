import { Component, Input, OnInit } from '@angular/core';
import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

@Component({
  selector: 'app-daneuzytkownika',
  templateUrl: './daneuzytkownika.component.html',
  styleUrls: ['./daneuzytkownika.component.css'],
  inputs: ['key'],
})
export class DaneUzytkownikaComponent implements OnInit {
  @Input() key;
  nazwa  : string;
  e_mail : string;
  typ    : string;
  id_zlecen : Array<string>;
  id_ofert  : Array<string>;

  constructor(private bazaUzytkownikowService:BazaUzytkownikowService) { }

  ngOnInit() {
    this.bazaUzytkownikowService.getUserDetails(this.key).subscribe(user => {
      this.nazwa     = user.nazwa;
      this.e_mail    = user.e_mail;
      this.typ       = user.typ;
      this.id_zlecen = user.id_zlecen;
      this.id_ofert  = user.id_ofert;
    })
  }

  onEditSubmit(key){
    let user = {
      nazwa:     this.nazwa,
      // e_mail:    this.e_mail,
      typ:       this.typ,
      // id_zlecen: this.id_zlecen,
      // id_ofert:  this.id_ofert,
    };
    console.log('Update : '+key);
    console.log(user);
    this.bazaUzytkownikowService.updateUser(key, user);
  }

  blockUser(key){
    console.log('Blokuj : '+key);
    // this.firebaseUsersService.updateUser(key, user);
  }

  deleteUser(key) {
    console.log('Kasuj : '+key);
    // this.firebaseUsersService.deleteUser(key);
  }

}
