import { PokemonTipoPipe } from './pokemon-tipo.pipe';

describe('PokemonTipoPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTipoPipe();
    expect(pipe).toBeTruthy();
  });
});
