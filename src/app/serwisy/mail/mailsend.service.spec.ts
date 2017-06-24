import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { MockMail } from '../../mocks/mock-mail';

import { MailsendService } from './mailsend.service';
let mockMail = new MockMail();

describe('MailsendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MailsendService, useValue: mockMail.getMock()},
        Http,
      ]
    });
  });

  it('should ...', inject([MailsendService], (service: MailsendService) => {
    expect(service).toBeTruthy();
  }));
});
