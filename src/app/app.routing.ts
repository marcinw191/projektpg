import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }            from './home/home.component';
import { GaleriaOgloszenComponent } from './galeria-ogloszen/galeria-ogloszen.component';
import { ProfileComponent }         from './profile/profile.component';
import { OgloszenieComponent }      from './ogloszenie/ogloszenie.component';

const appRoutes: Routes = [
  { path:'',                 component: HomeComponent },
  { path:'zlecenie',         component: HomeComponent },
  { path:'tablica_ogloszen', component: GaleriaOgloszenComponent },
  { path:'pomoc',            component: HomeComponent },
  { path:'kontakt',          component: HomeComponent },
  { path:'profil',           component: ProfileComponent },
  { path:'ogloszenie',       component: OgloszenieComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
