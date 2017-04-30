import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

import { BazaUzytkownikowService } from '../serwisy/bazauzytkownikow.service';

@Component({
  selector: 'app-profil-edycja',
  templateUrl: './profil-edycja.component.html',
  styleUrls: ['./profil-edycja.component.css'],
})

export class ProfilEdycjaComponent implements OnInit {
  @Input() profil;
  typDomyslny: string;

  typy:Array<Object> = [
    {rola: "zleceniodawca", nazwa: "zleceniodawca"},
    {rola: "wykonawca",     nazwa: "wykonawca"}
  ];

  constructor(private bazaUzytkownikowService:BazaUzytkownikowService, private router: Router){
  }

  ngOnInit() {
  }

  changeType() {
    console.log(this.typDomyslny);
    this.profil.typ = this.typDomyslny;
  }

  saveProfile(){
    this.bazaUzytkownikowService.updateUser(this.profil.$key,this.profil);
    alert('Profil zapisany');
  }

  returnProfile(){
    // this.router.navigateByUrl('/profil:false');
    this.router.navigateByUrl('/profil-podglad');
  }

}
