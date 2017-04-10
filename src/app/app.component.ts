import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  adres1:string = "ul.Spacerowa 5, Warszawa";
  adres2:string = "ul.Obywatelska 7, Gdańsk";
  adres3:string = "ul.Traugutta 71, Elbląg";

  ngOnInit () {
  };
}


