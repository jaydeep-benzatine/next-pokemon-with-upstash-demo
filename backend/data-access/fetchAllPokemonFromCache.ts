import client from '@/backend/redis/client';

type IPokemon = {
  id: number;
  name: string;
};

export default async function fetchAllPokemonFromCache(): Promise<IPokemon[]> {
  const keys = await client.keys('*');

  const pokemons: IPokemon[] = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    const data = await client.get(key);

    if (!data) continue;

    try {
      const parsed = JSON.parse(data);
      pokemons.push(parsed);
    } catch (error) {}
  }

  return pokemons;
}
