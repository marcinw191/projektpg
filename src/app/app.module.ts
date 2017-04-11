import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CookielawComponent } from './cookielaw/cookielaw.component';

@NgModule({
  declarations: [
    AppComponent,
    CookielawComponent
  ],
  imports: [
    BrowserModule,
    CookieLawModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
