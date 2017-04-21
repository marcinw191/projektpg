import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }            from './home/home.component';
import { GaleriaOgloszenComponent } from './galeria-ogloszen/galeria-ogloszen.component';
import { ProfileComponent }         from './profile/profile.component';
import { OgloszenieComponent }      from './ogloszenie/ogloszenie.component';
import { PolicyComponent }          from './policy/policy.component';
import { DodajOgloszenieComponent } from './dodaj-ogloszenie/dodaj-ogloszenie.component';
import { OpisDzialaniaComponent }   from './opis-dzialania/opis-dzialania.component';

const appRoutes: Routes = [
  { path:'',                     component: GaleriaOgloszenComponent},
  { path:'zlecenie',             component: GaleriaOgloszenComponent },
  { path:'dodaj_ogloszenie',     component: DodajOgloszenieComponent },
  { path:'pomoc',                component: OpisDzialaniaComponent},
  { path:'kontakt',              component: HomeComponent },
  { path:'profil',               component: ProfileComponent },
  { path:'ogloszenie/:id',       component: OgloszenieComponent },
  { path:'polityka_prywatnosci', component: PolicyComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
