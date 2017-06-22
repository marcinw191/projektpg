import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profil-widok',
  templateUrl: './profil-widok.component.html',
  styleUrls: ['./profil-widok.component.css']
})
export class ProfilWidokComponent implements OnInit {
  @Input() profil_view: any;
  @Input() profil_edycja: any;
  @Output() edycja_stan  = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  edytujProfil(){
    this.edycja_stan.emit({stan: true});
  }

}
