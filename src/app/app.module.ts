import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
