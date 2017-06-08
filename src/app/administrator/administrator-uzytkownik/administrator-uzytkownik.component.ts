import { Component, Input, OnInit } from '@angular/core';
import { DialogService }     from 'ngx-bootstrap-modal';

import { PopupAlertComponent }   from '../../popup/popup-alert/popup-alert.component';
import { PopupConfirmComponent } from '../../popup/popup-confirm/popup-confirm.component';

import { AuthService }       from '../../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

@Component({
  selector: 'app-administrator-uzytkownik',
  templateUrl: './administrator-uzytkownik.component.html',
  styleUrls: ['./administrator-uzytkownik.component.css'],
})
export class AdministratorUzytkownikComponent implements OnInit {
  @Input() key;
  user   :any;
  user_auth :any;
  result :boolean;
  blokada :boolean = false;
  disable :boolean;

  constructor(private auth: AuthService,
              private bazaUzytkownikowService: BazaUzytkownikowService,
              public dialogService: DialogService) {
    this.user_auth=this.auth.getProfileAuth();
  }

  ngOnInit() {
    this.bazaUzytkownikowService.getUserDetails(this.key).subscribe(user => {
      this.user = user;
      this.blokada = (this.user.blokada == "tak");
      this.disable = (this.user.user_id == this.user_auth.sub);
    });
  }

  updateUser(key){
    let user = { typ: this.user.typ };
    this.bazaUzytkownikowService.updateUser(key, user);
    // alert('Typ użytkownika zmieniony !!!');
    this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Typ użytkownika zmieniony !!!' });
  }

  blockUser(key){
    let user: any;
    if (this.blokada) {
      user = { blokada: 'tak' };
      // alert('Użytkownik zablokowany !!!');
      this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Użytkownik zablokowany !!!' });
    }
    else {
      user = { blokada: 'nie' };
      // alert('Użytkownik odblokowany !!!');
      this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Użytkownik odblokowany !!!' });
    }
    this.bazaUzytkownikowService.updateUser(key, user);
  }

  deleteUser(key) {
    // this.result = confirm('Czy usunąć użytkownika z bazy ?');
    this.dialogService.addDialog(PopupConfirmComponent, {
      title: '',
      message: 'Czy usunąć użytkownika z bazy ?'
    })
      .subscribe((isConfirmed) => {
        //Get dialog result
        this.result = isConfirmed;
      });
    if (this.result) {
      this.bazaUzytkownikowService.deleteUser(key);
    }
  }

}
