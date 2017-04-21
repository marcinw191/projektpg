import { Component, OnInit }   from '@angular/core';
import { AuthService }         from '../auth0/auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-galeria-ogloszen',
  templateUrl: './galeria-ogloszen.component.html',
  styleUrls: ['./galeria-ogloszen.component.css']
})
export class GaleriaOgloszenComponent implements OnInit {

  orientacja: string = 'galeria';
  miniatury: FirebaseListObservable<any>;

  zmienOrientacje(orientacja: string) {
      this.orientacja = orientacja;
  }

  constructor(private auth: AuthService, private af: AngularFire) {
      this.miniatury = af.database.list('/ogloszenia');
  }

  ngOnInit() {

  }

}
