import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DialogService } from 'ngx-bootstrap-modal';
import { options } from '../../app-variables';

export interface IMessage {
  name?: string;
  email?: string;
  message?: string;
}

@Injectable()
export class MailsendService {
  private emailUrl = 'http://localhost:3000/send-mail';
  private opcje: any = options;

  constructor(private http: Http,
              public dialogService: DialogService) {
  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    const bodyString = new URLSearchParams();
    bodyString.append('name', message.name);
    bodyString.append('email', message.email);
    bodyString.append('message', message.message);

    return this.http.post(this.emailUrl, bodyString).map(response => {
      this.opcje.confirmButtonText = 'OK';
      this.opcje.icon = 'success';
      this.dialogService.alert('', 'Mail wysłany!', this.opcje);
      return response;
    })
      .catch(error => {
        this.opcje.confirmButtonText = 'OK';
        this.opcje.icon = 'error';
        this.dialogService.alert('', 'Wysłanie maila nie powiodło się!', this.opcje);
        return error;
      });
  }
}
