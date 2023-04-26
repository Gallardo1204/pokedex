import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonCompleto, PokemonResponse, Type } from '../interfaces/pokemon.interface';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

    constructor(private http: HttpClient) { }

      /* URLS DE LAS APIS */
      /* https://pokeapi.co/api/v2/type tipos */

    getPokemones(){
        return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/?limit=150') 
    }

    
    infoPokemon(nombre:string):Observable<Pokemon>{
        return this.http.get<PokemonCompleto>(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .pipe(
            map(this.trasformarInfoPokemon)
        )
    }



  /* getAllpokemons():Observable<Pokemon[]>{
    return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/?limit=5')
    
    //transformamos la informacion para obtener el id, nombre, imagen
    .pipe(
        map(this.trasformarInfoPokemon)
    )
  } */

  /* se crea una funcion independiente para transformar la informacion */
  private trasformarInfoPokemon( response: PokemonCompleto ): Pokemon {

    let id = response.id.toString();
    const nombre = response.name;

    if(id.length < 2){
        id = '00'+id;       
    } else if(id.length < 3){
        id = '0'+id;
    }

    let tipos:any = [];

    for (const item of response.types) {
        tipos.push( item.type.name);
        
    }

    const imagen = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    
    return {id, nombre, imagen, tipos};

  }

  



}
