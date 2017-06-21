import { Component, OnInit } from '@angular/core';
import { MailsendService, IMessage } from '../serwisy/mail/mailsend.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})

export class KontaktComponent implements OnInit {
  message: IMessage = {};
  adres: string = "Al. Grunwaldzka 472A, 80-309 Gdańsk";

  constructor(private mailsendService: MailsendService) { }

  sendEmail(message: IMessage) {
    this.mailsendService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

  ngOnInit() {
  }

  // wyslij() {
  //   document.getElementById('formularz').innerHTML = `
  //     <h2>Wiadomość została wysłana</h2> <br><br>
  //     <h2>Dziękujęmy za podzielenie się z nami Waszą opinią</h2> <br><br>
  //     <h2>Odpowiemy na Państwa wiadomość niezwłoczenie</h2>
  //     `;
  // }
}
