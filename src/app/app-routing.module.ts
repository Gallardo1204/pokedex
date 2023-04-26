import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: PokemonesComponent },
    { path: 'pokemon', component: PokemonComponent },
    { path: '**', component: PokemonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
