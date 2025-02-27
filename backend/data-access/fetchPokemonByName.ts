import { IPokemon } from '@/types';
import client from '../redis/client';

export default async function fetchPokemonByName(
  name: string
): Promise<IPokemon> {
  const cache = await client.get(name);

  if (cache) {
    try {
      const parsed = JSON.parse(cache) as IPokemon;
      return parsed;
    } catch (error) {}
  }

  const url = process.env.NEXT_POKEMON_API + `/${name}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error('Pokemon not found');

  const data = await response.json();

  const pokemon = {
    id: data.id,
    name: data.name,
  };

  await client.set(name, JSON.stringify(pokemon));

  return pokemon;
}
