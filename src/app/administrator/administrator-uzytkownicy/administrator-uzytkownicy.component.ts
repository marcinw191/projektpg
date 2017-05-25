import { Component, OnInit } from '@angular/core';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

@Component({
  selector: 'app-administrator-uzytkownicy',
  templateUrl: './administrator-uzytkownicy.component.html',
  styleUrls: ['./administrator-uzytkownicy.component.css']
})
export class AdministratorUzytkownicyComponent implements OnInit {
  private users: any[];

  constructor(private bazaUzytkownikowService: BazaUzytkownikowService) {
  }

  ngOnInit() {
    this.bazaUzytkownikowService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
