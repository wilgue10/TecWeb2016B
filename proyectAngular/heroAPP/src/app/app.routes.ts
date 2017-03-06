import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {HeroComponent} from "./hero/hero.component";
import {PoderComponent} from "./poder/poder.component";
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'poder', component: PoderComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

