import { Component } from '@angular/core';
import { PokemonCompleto } from 'src/app/interfaces/pokemon.interface';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../interfaces/pokemon.interface';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent {

    pokemones:any = [];


    constructor( private service: PokemonServiceService){}

    ngOnInit(): void {
        this.cargarPokemones();
    }


    cargarPokemones(){

        this.service.getPokemones().subscribe({
            next:(resp) => {
                
                for (const pokemon of resp.results) {
                    
                    this.service.infoPokemon(pokemon.name).subscribe({
                        next:(respuesta) =>{
                            this.pokemones.push(respuesta);
                        },
                        error:(err) =>{
                            alert('error al llenar arrays de pokemones');
                            console.log(err);                
                        },
                    })
                    
                }
            },
            error:(err) =>{
                alert('Error cargando pokemones');
                console.log(err);                
            }
        });

        console.log(this.pokemones);
        
    }


}
