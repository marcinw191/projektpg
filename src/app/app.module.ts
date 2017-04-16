import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule }                      from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig }             from 'angular2-jwt';
import { CookieLawModule }                  from 'angular2-cookie-law';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';

import { AppComponent }                 from './app.component';
import { NavbarComponent }              from './navbar/navbar.component';
import { HomeComponent }                from './home/home.component';
import { GaleriaOgloszenComponent }     from './galeria-ogloszen/galeria-ogloszen.component';
import { OgloszenieMiniaturaComponent } from './ogloszenie-miniatura/ogloszenie-miniatura.component';
import { OgloszenieComponent }          from './ogloszenie/ogloszenie.component';
import { ProfileComponent }             from './profile/profile.component';
import { FooterComponent }              from './footer/footer.component';
import { CookielawComponent }           from './cookielaw/cookielaw.component';
import { PolicyComponent }              from './policy/policy.component';

import { routing, appRoutingProviders } from './app.routing';
import { AuthService }                  from './auth0/auth.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GaleriaOgloszenComponent,
    OgloszenieMiniaturaComponent,
    OgloszenieComponent,
    ProfileComponent,
    FooterComponent,
    CookielawComponent,
    PolicyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CookieLawModule,
    BrowserAnimationsModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ],
    },
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
