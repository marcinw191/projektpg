import {Component, OnInit, Input } from '@angular/core';

import { BazaUzytkownikowService } from '../../serwisy/firebase-uzytkownicy/bazauzytkownikow.service';

@Component({
  selector: 'app-profil-uzytkownik',
  templateUrl: './profil-uzytkownik.component.html',
  styleUrls: ['./profil-uzytkownik.component.css']
})
export class ProfilUzytkownikComponent implements OnInit {
  @Input() user_id: string;
  private nazwa: string;

  constructor(private bazaUzytkownikowService: BazaUzytkownikowService) {
  }

  ngOnInit() {
    this.bazaUzytkownikowService.getUserById(this.user_id).subscribe(user => {
      this.nazwa = user[0].nazwa;
    });
  }

}
