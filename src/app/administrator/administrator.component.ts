import { Component, OnInit } from '@angular/core';
import { Router}             from '@angular/router';

import { AuthService }       from '../serwisy/auth0/auth.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  typ_zestawienia :number;
  // przyjęta zasada :
  //  - typ_zestawienia = 0   - brak zestawienia
  //  - typ_zestawienia = 1   - zestawienie użytkowników
  //  - typ_zestawienia = 2   - zestawienie ogłoszeń/zleceń
  //  - typ_zestawienia = 3   - zestawienie ofert

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.authenticated()) {
      this.typ_zestawienia=0;
    }
    else {
      alert('Nie jesteś zalogowany !!!');
      this.router.navigateByUrl('/');
    }
  }

  zestawienie_uzytkownikow() {
    this.typ_zestawienia=1;
  }

  zestawienie_ogloszen() {
    this.typ_zestawienia=2;
  }

  zestawienie_ofert() {
    this.typ_zestawienia=3;
  }

  wyjscie() {
    this.router.navigateByUrl('/');
  }

}
