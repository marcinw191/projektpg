import { BrowserModule }       from '@angular/platform-browser';
import { NgModule}             from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { AppComponent }        from './app.component';
import { GoogleMapsComponent } from './googlemaps/googlemaps.component';
import { AgmCoreModule }       from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
