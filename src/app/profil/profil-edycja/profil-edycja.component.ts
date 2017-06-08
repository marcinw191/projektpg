import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {WalidacjaService} from '../../serwisy/walidacja/walidacja.service';
import { DialogService }     from 'ngx-bootstrap-modal';

import { PopupAlertComponent } from '../../popup/popup-alert/popup-alert.component';

@Component({
  selector: 'app-profil-edycja',
  templateUrl: './profil-edycja.component.html',
  styleUrls: ['./profil-edycja.component.css']
})
export class ProfilEdycjaComponent implements OnInit {
  @Input() profil_edit: any;
  @Output() edycja_stan  = new EventEmitter<any>();
  @Output() profil_zm = new EventEmitter<any>();

  private edit_email: string;
  private edit_telefon: string;
  private edit_kod: string;
  private profil_temp: any;

  constructor(private walidacjaService: WalidacjaService,
              public dialogService: DialogService) { }

  ngOnInit() {
    this.profil_temp=this.profil_edit;
    this.edit_telefon=this.profil_temp.telefon;
    this.edit_kod=this.profil_temp.kod;
    this.edit_email=this.profil_temp.e_mail;
  }

  powrotProfil(){
    this.edycja_stan.emit({stan: false});
  }

  zapiszProfil(){
    if (((this.walidacjaService.walidacja("telefon",this.edit_telefon)) || (this.edit_telefon.length==0)) &&
        ((this.walidacjaService.walidacja("kod",this.edit_kod))         || (this.edit_kod.length==0))     &&
        ((this.walidacjaService.walidacja("email",this.edit_email))     || (this.edit_email.length==0))   ) {
      this.profil_edit.e_mail=this.edit_email;
      this.profil_edit.telefon=this.edit_telefon;
      this.profil_edit.kod=this.edit_kod;
      this.profil_zm.emit({profil: this.profil_temp});
    }
    else {
      if (!this.walidacjaService.walidacja("telefon",this.edit_telefon)) {
        // alert('Numer telefonu niepoprawny');
        this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Numer telefonu niepoprawny' });
        this.edit_telefon=this.profil_edit.telefon;
      }
      if (!this.walidacjaService.walidacja("kod",this.edit_kod)) {
        // alert('Kod pocztowy niepoprawny');
        this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Kod pocztowy niepoprawny' });
        this.edit_kod=this.profil_edit.kod;
      }
      if (!this.walidacjaService.walidacja("email",this.edit_email)) {
        // alert('Adres e-mail niepoprawny');
        this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Adres e-mail niepoprawny' });
        this.edit_email=this.profil_edit.e_mail;
      }
    }
  }

}
