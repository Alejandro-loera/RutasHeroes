import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BuscadorComponent } from './buscador/buscador.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'about', component:AboutComponent},
  {path: 'heroe/:id', component:HeroeComponent},
  {path: 'buscador/:nombreh', component:BuscadorComponent},
  {path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
