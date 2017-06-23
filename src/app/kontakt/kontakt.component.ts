import { Component, OnInit } from '@angular/core';
import { MailsendService, IMessage } from '../serwisy/mail/mailsend.service';
import { WalidacjaService } from '../serwisy/walidacja/walidacja.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})

export class KontaktComponent implements OnInit {
  message: IMessage = {};
  adres: string = 'Al. Grunwaldzka 472A, 80-309 Gdańsk';

  constructor(private mailsendService: MailsendService,
              private walidacjaService: WalidacjaService) { }

  sendEmail(message: IMessage) {
    // if ((this.walidacjaService.walidacja("email",this.email)) || (this.email.length==0)) {

    this.mailsendService.sendEmail(message).subscribe(res => {
        console.log('AppComponent Success', res);
      }, error => {
        console.log('AppComponent Error', error);
      });
  }

  ngOnInit() {
  }
}
