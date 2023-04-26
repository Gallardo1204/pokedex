import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTipo'
})
export class PokemonTipoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
