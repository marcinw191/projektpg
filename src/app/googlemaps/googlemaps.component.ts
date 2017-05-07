import { Component, Input, OnInit } from '@angular/core';
import { MapsAPILoader }            from 'angular2-google-maps/core';
declare var google: any;

@Component({
  selector: 'googlemap',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css'],
  inputs: ['address'],
})

export class GoogleMapsComponent implements OnInit{
  @Input() address;
  lat;
  lng;
  geocoder;
  zoom: number = 14;

  constructor (private mapsAPILoader : MapsAPILoader) {
  }

  ngOnInit () {
    this.mapsAPILoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
      this.geocoder.geocode({ 'address': this.address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
        }
        else {
          if (status == "ZERO_RESULTS") {
            alert('Jest problem ze znalezieniem adresu w Google maps');
          }
          else {
            alert('Wystąpił nieoczekiwany błąd ze strony Google maps (problem :' + status + ')');
          }
        }
      });
    });
  }
}
