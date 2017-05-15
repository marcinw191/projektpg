import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }            from './home/home.component';
import { AdministratorComponent }   from './administrator/administrator.component';
import { GaleriaOgloszenComponent } from './ogloszenia-galeria/ogloszenia-galeria.component';
import { ProfilComponent }          from './profil/profil.component';
import { OgloszenieComponent }      from './ogloszenie/ogloszenie.component';
import { PolicyComponent }          from './cookielaw/policy/policy.component';
import { DodajOgloszenieComponent } from './ogloszenie/ogloszenie-dodaj/ogloszenie-dodaj.component';
import { OpisDzialaniaComponent }   from './opis-dzialania/opis-dzialania.component';
import { Strona404Component }       from './strona404/strona404.component';

const appRoutes: Routes = [
  { path:'',                     component: GaleriaOgloszenComponent},
  { path:'zlecenie',             component: GaleriaOgloszenComponent },
  { path:'dodaj_ogloszenie',     component: DodajOgloszenieComponent },
  { path:'pomoc',                component: OpisDzialaniaComponent},
  { path:'kontakt',              component: HomeComponent },
  { path:'profil',               component: ProfilComponent },
  { path:'ogloszenie/:id',       component: OgloszenieComponent },
  { path:'polityka_prywatnosci', component: PolicyComponent },
  { path:'administrator',        component: AdministratorComponent },
  { path:'**',                   component: Strona404Component } // musi być na końcu tablicy routingu];
  ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
