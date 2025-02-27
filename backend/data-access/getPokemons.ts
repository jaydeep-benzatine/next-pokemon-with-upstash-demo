import fetchAllPokemonFromCache from './fetchAllPokemonFromCache';
import fetchPokemonByName from './fetchPokemonByName';

export default async function getPokemons(search?: string) {
  if (!search) return fetchAllPokemonFromCache();

  const pokemon = await fetchPokemonByName(search);
  return [pokemon];
}
