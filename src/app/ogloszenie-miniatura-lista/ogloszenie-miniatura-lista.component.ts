import { Component, OnInit, Input } from '@angular/core';
import { OgloszenieMiniatura } from './miniatura';

@Component({
  selector: 'ogloszenie-miniatura-lista',
  templateUrl: './ogloszenie-miniatura-lista.component.html',
  styleUrls: ['./ogloszenie-miniatura-lista.component.css']
})
export class OgloszenieMiniaturaComponent implements OnInit {

  @Input() miniatura: OgloszenieMiniatura;

  constructor() { }

  ngOnInit() {
  }

}
