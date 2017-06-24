import { Component, OnInit } from '@angular/core';
import { MailsendService, IMessage } from '../serwisy/mail/mailsend.service';
import 'rxjs/add/operator/switchMap';
import { WalidacjaService } from '../serwisy/walidacja/walidacja.service';
import { DialogService } from 'ngx-bootstrap-modal';
import { options } from '../app-variables';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})

export class KontaktComponent implements OnInit {
  message: IMessage = {};
  adres: string = "Al. Grunwaldzka 472A, 80-309 Gdańsk";
  private email: string;
  private opcje: any = options;

  constructor(private mailsendService: MailsendService,
              private walidacjaService: WalidacjaService,
              public dialogService: DialogService) { }

  sendEmail(message: IMessage) {
    if ((this.walidacjaService.walidacja("email",this.message.email)) && (this.message.email.length!=0)) {
      this.mailsendService.sendEmail(message).subscribe(res => {
          console.log('AppComponent Success', res);
        }, error => {
          console.log('AppComponent Error', error);
        });
    } else {
       this.dialogService.alert('','Adres e-mail niepoprawny',this.opcje);
    }
  }

  ngOnInit() {
  }
}
