import client from '@/backend/redis/client';
import { IPokemon } from '@/types';

export async function GET(request: Request) {
  const keys = await client.keys('*');

  const pokemonList = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    const data = await client.get(key);

    if (!data) continue;

    const pokemon = JSON.parse(data);

    pokemonList.push(pokemon);
  }

  return Response.json(pokemonList);
}
