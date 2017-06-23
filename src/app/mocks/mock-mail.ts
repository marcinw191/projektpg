import {isUndefined} from "util";
import {Observable} from 'rxjs';
import { IMessage } from '../serwisy/mail/mailsend.service';

export class MockMail {

  private message: IMessage;

  constructor(message?: IMessage){
    if(isUndefined(message))
    {
      this.message = {
        name: "Ala",
        email: "ala@ala.pl",
        message: "test ala",
      };
    }
    else {
      this.message = message;
    }
  }

  public getMock(): any {
    let _this = this;
    return Observable.of([_this.message]);
  }

}
