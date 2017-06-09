import { Component, Input, OnInit } from '@angular/core';
import { DialogService }            from 'ngx-bootstrap-modal';

import { options }                 from '../../app-variables';
import { AuthService }             from '../../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

@Component({
  selector: 'app-administrator-uzytkownik',
  templateUrl: './administrator-uzytkownik.component.html',
  styleUrls: ['./administrator-uzytkownik.component.css'],
})
export class AdministratorUzytkownikComponent implements OnInit {
  @Input() key;
  private user: any;
  private user_auth: any;
  private result: boolean;
  private blokada: boolean = false;
  private disable: boolean;
  private opcje: any = options;

  constructor(private auth: AuthService,
              private bazaUzytkownikowService: BazaUzytkownikowService,
              public dialogService: DialogService) {
    this.user_auth = this.auth.getProfileAuth();
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
    this.opcje.icon = 'success';
    this.dialogService.alert('','Typ użytkownika zmieniony !!!',this.opcje);
  }

  blockUser(key){
    let user: any;
    if (this.blokada) {
      user = { blokada: 'tak' };
      this.opcje.icon = 'success';
      this.dialogService.alert('','Użytkownik zablokowany !!!',this.opcje);
    }
    else {
      user = { blokada: 'nie' };
      this.opcje.icon = 'success';
      this.dialogService.alert('', 'Użytkownik odblokowany !!!', this.opcje);
    }
    this.bazaUzytkownikowService.updateUser(key, user);
  }

  deleteUser(key) {
    this.opcje.icon = 'question';
    this.opcje.confirmButtonText = 'Usuń';
    this.opcje.cancelButtonText = 'Powrót';
    this.dialogService.confirm('', 'Czy usunąć użytkownika z bazy ?', this.opcje).then((res: any) => {
      this.result = res;
      if (this.result) {
          this.bazaUzytkownikowService.deleteUser(key);
        }
    });
  }

}
