import { IPokemon } from '@/types';
import client from '../redis/client';
import fetchBokemonByName from './fetchPokemonByName';

export default async function fetchPokemonIfNotFoundFetchAndSetInCache(
  name: string
): Promise<IPokemon | null> {
  const cache = await client.get(name);

  if (cache) {
    const data: IPokemon = JSON.parse(cache);

    return data;
  }

  try {
    const data = fetchBokemonByName(name);
    client.set(name, JSON.stringify(data));
    return data;
  } catch (error) {
    console.log('Error while fetching the pokemon');
    return null;
  }
}
