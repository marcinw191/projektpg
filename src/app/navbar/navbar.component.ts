import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Rx';

import { AuthService }             from '../serwisy/auth0/auth.service';
import { BazaUzytkownikowService } from '../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

import { Uzytkownik } from "../klasy/uzytkownik";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private user :any;

  constructor(private auth: AuthService,
              private bazaUzytkownikowService: BazaUzytkownikowService) {
    this.user = new Uzytkownik();
  }

  ngOnInit(){
    let timer = Observable.timer(2000,2000);
    timer.subscribe(t => {
      if(this.auth.authenticated()) {
        this.bazaUzytkownikowService.getUserById(this.auth.getProfileAuth().sub).subscribe(user => {
          this.user = user[0];
        });
      }
    });
  }

}
