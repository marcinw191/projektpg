import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  name: string;

  constructor() {
    this.name = 'Angular2 Cookie Law with Angular2'
  }

  ngOnInit() {
  }
}
