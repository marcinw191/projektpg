import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaOgloszenComponent }     from './ogloszenia/ogloszenia-galeria/ogloszenia-galeria.component';
import { ProfilComponent }              from './profil/profil.component';
import { OgloszenieComponent }          from './ogloszenia/ogloszenie/ogloszenie.component';
import { PolicyComponent }              from './cookielaw/policy/policy.component';
import { DodajOgloszenieComponent }     from './ogloszenia/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OpisDzialaniaComponent }       from './opis-dzialania/opis-dzialania.component';
import { CallbackComponent }            from './callback/callback.component';
import { Strona404Component }           from './strona404/strona404.component';
import { AdministratorProfilComponent } from './administrator/administrator-profil/administrator-profil.component';
import { KontaktComponent }             from './kontakt/kontakt.component';

const appRoutes: Routes = [
  { path:'',                     component: GaleriaOgloszenComponent},
  { path:'zlecenie',             component: GaleriaOgloszenComponent },
  { path:'dodaj_ogloszenie',     component: DodajOgloszenieComponent },
  { path:'pomoc',                component: OpisDzialaniaComponent},
  { path:'kontakt',              component: KontaktComponent },
  { path:'profil',               component: ProfilComponent },
  { path:'profil/:id',           component: AdministratorProfilComponent },
  { path:'ogloszenie/:id',       component: OgloszenieComponent },
  { path:'polityka_prywatnosci', component: PolicyComponent },
  { path:'callback',             component: CallbackComponent },
  { path:'**',                   component: Strona404Component } // musi być na końcu tablicy routingu];
  ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
