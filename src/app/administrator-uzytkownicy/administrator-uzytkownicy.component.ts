import { Component, OnInit } from '@angular/core';

import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

@Component({
  selector: 'app-administrator-uzytkownicy',
  templateUrl: './administrator-uzytkownicy.component.html',
  styleUrls: ['./administrator-uzytkownicy.component.css']
})
export class AdministratorUzytkownicyComponent implements OnInit {
  users : any[];

  constructor(private bazaUzytkownikowService:BazaUzytkownikowService) { }

  ngOnInit() {
    alert('Trwa przygotowywanie zestawienia użytkowników');
    this.bazaUzytkownikowService.getUsers().subscribe(users =>
    { this.users = users;
    });
  }

}
