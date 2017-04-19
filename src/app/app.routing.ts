import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }            from './home/home.component';
import { GaleriaOgloszenComponent } from './galeria-ogloszen/galeria-ogloszen.component';
import { ProfileComponent }         from './profile/profile.component';
import { OgloszenieComponent }      from './ogloszenie/ogloszenie.component';
import { PolicyComponent }          from './policy/policy.component';

const appRoutes: Routes = [
  { path:'',                     component: GaleriaOgloszenComponent},
  { path:'zlecenie',             component: GaleriaOgloszenComponent },
  { path:'pomoc',                component: GaleriaOgloszenComponent },
  { path:'kontakt',              component: GaleriaOgloszenComponent },
  { path:'profil',               component: ProfileComponent },
  { path:'ogloszenie',           component: OgloszenieComponent },
  { path:'polityka_prywatnosci', component: PolicyComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
