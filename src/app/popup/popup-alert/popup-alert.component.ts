import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ngx-bootstrap-modal';

export interface AlertModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-popup-alert',
  templateUrl: './popup-alert.component.html',
  styleUrls: ['./popup-alert.component.css']
})
export class PopupAlertComponent extends DialogComponent<AlertModel, null> implements AlertModel {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }


}
