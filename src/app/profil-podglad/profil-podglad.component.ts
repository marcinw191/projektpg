import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profil-podglad',
  templateUrl: './profil-podglad.component.html',
  styleUrls: ['./profil-podglad.component.css'],
})

export class ProfilPodgladComponent implements OnInit {
  @Input() profil;

  constructor(private router: Router){
  }

  ngOnInit() {
  }

  edytujProfil(){
    // this.router.navigateByUrl('/profil:true');
    this.router.navigateByUrl('/profil-edycja');
    alert('Wejście w edycję danych profilu');
  }

  listOfOrders(){
    alert('Przygotowywanie zestawienia zleceń');
  }

  listOfOfferts(){
    alert('Przygotowywanie zestawienia ofert');
  }

  Administrator(){
    this.router.navigateByUrl('/administrator');
    // alert('Przejście do narzędzi Administratora');
  }
}
