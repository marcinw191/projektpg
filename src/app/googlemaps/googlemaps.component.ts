import { Component, Input, OnChanges } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { DialogService }     from 'ngx-bootstrap-modal';

import { PopupAlertComponent }   from '../popup/popup-alert/popup-alert.component';

declare var google: any;

@Component({
  selector: 'googlemap',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})

export class GoogleMapsComponent implements OnChanges{
  @Input() adres: string;
  lat;
  lng;
  geocoder;
  zoom: number = 14;

  constructor (private mapsAPILoader : MapsAPILoader,
               public dialogService: DialogService) {
    this.adres = "";
  }

  ngOnChanges () {
    let _this = this;
    this.mapsAPILoader.load().then(function() {

      _this.geocoder = new google.maps.Geocoder();
      if(_this.adres != ""){
        _this.geocoder.geocode({ 'address': _this.adres }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            _this.lat = results[0].geometry.location.lat();
            _this.lng = results[0].geometry.location.lng();
          }
          else {
            if (status == "ZERO_RESULTS") {
              // alert('Jest problem ze znalezieniem adresu w Google maps');
              _this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Jest problem ze znalezieniem adresu w Google maps' });
            }
            else {
              // alert('Wystąpił nieoczekiwany błąd ze strony Google maps (problem :' + status + ')');
              _this.dialogService.addDialog(PopupAlertComponent, { title: '', message: 'Wystąpił nieoczekiwany błąd ze strony Google maps (problem :' + status + ')' });
            }
          }
        });
      }
    });
  }
}
