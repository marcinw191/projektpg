import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OgloszenieMiniaturaComponent } from './ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OgloszenieComponent } from './ogloszenie/ogloszenie.component';
import { GaleriaOgloszenComponent } from './galeria-ogloszen/galeria-ogloszen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    OgloszenieMiniaturaComponent,
    OgloszenieComponent,
    GaleriaOgloszenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'ogloszenie',
        component: OgloszenieComponent
      },
      {
        path: 'ogloszenia',
        component: GaleriaOgloszenComponent
      },
      {
        path: '',
        redirectTo: '/ogloszenia',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
