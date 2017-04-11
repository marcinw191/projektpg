import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  name: string;

  constructor() {
  }

  ngOnInit() {
    this.name = 'Angular2 Cookie Law with Angular2'
  }
}
