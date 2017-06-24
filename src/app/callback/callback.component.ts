import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit, OnDestroy {
  czas: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    let timer = Observable.timer(2000,2000);
    this.czas = timer.subscribe(t => {
      this.router.navigate(['/']);
    });
  }

  ngOnDestroy() {
    this.czas.unsubscribe();
  }

}
