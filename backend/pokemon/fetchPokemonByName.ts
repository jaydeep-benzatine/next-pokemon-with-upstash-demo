import { IPokemon } from '@/types';

export default async function fetchBokemonByName(
  name: string
): Promise<IPokemon> {
  const url = process.env.NEXT_POKEMON_API + `/${name}`;

  const result = await fetch(url);

  if (!result.ok) throw new Error('Pokemon not found');

  const parsedValue = await result.json();

  const data: IPokemon = {
    id: parsedValue?.id,
    name: parsedValue?.name,
    photoUrl: parsedValue?.sprites?.front_default,
  };

  return data;
}
