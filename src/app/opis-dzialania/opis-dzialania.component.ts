import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../auth0/auth.service';

@Component({
  selector: 'app-opis-dzialania',
  templateUrl: './opis-dzialania.component.html',
  styleUrls: ['./opis-dzialania.component.css']
})
export class OpisDzialaniaComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
