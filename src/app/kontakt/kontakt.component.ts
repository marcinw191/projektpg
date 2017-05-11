import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../auth0/auth.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  wyslij() {
    document.getElementById('formularz').innerHTML =
      '<h2>Wiadomość została wysłana</h2> <br><br>' +
      '<h2>Dziękujęmy za podzielenie się z nami Waszą opinią</h2> <br><br>' +
      '<h2>Odpowiemy na Państwa wiadomość niezwłoczenie</h2>';
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
}
