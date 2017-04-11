import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookielaw',
  templateUrl: './cookielaw.component.html',
  styleUrls: ['./cookielaw.component.css']
})
export class CookielawComponent implements OnInit {
  @ViewChild('cookieLaw')
  cookieLawEl: any;

  cookieLawSeen: boolean;

  constructor() {
  }

  ngOnInit() {
    this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
  }

  dismiss(): void {
    this.cookieLawEl.dismiss();
  }
}
