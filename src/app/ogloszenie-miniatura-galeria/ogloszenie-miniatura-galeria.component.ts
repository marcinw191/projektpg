import { Component, OnInit, Input } from '@angular/core';
import { OgloszenieMiniatura } from './miniatura';

@Component({
  selector: 'ogloszenie-miniatura-galeria',
  templateUrl: './ogloszenie-miniatura-galeria.component.html',
  styleUrls: ['./ogloszenie-miniatura-galeria.component.css']
})
export class OgloszenieMiniaturaComponent implements OnInit {

  @Input() miniatura: OgloszenieMiniatura;

  constructor() { }

  ngOnInit() {
  }

}
