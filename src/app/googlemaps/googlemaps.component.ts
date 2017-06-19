import { Component, Input, OnChanges } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

@Component({
  selector: 'googlemap',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})

export class GoogleMapsComponent implements OnChanges{
  @Input() adres: string;
  private lat;
  private lng;
  private geocoder;

  constructor (private mapsAPILoader : MapsAPILoader) {
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
        });
      }
    });
  }
}
