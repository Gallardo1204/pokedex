import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material';
import { PokemonTipoPipe } from './pipes/pokemon-tipo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    PokemonComponent,
    PokemonTipoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
