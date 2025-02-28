import fetchAllPokemonFromCache from './fetchAllPokemonFromCache';
import fetchPokemonByName from './fetchPokemonByName';

export default async function getPokemons(search?: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (!search) return fetchAllPokemonFromCache();

  const pokemon = await fetchPokemonByName(search);
  return [pokemon];
}
