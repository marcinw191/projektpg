import { Component, OnInit, Input } from '@angular/core';
import { OgloszenieMiniatura }      from './miniatura';

@Component({
  selector: 'ogloszenie-miniatura',
  templateUrl: './ogloszenie-miniatura.component.html',
  styleUrls: ['./ogloszenie-miniatura.component.css']
})
export class OgloszenieMiniaturaComponent implements OnInit {

  @Input() miniatura: OgloszenieMiniatura;
  @Input() orientacja: string;

  constructor() {
  }

  ngOnInit() {
  }

}
