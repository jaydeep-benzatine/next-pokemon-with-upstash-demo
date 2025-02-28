import type { IPokemon } from '@/types';
import { PokemonCard } from './pokemon-card';
import getPokemons from '@/backend/data-access/getPokemons';

type IPokemonListProps = {
  search: string;
};

export async function PokemonList(props: IPokemonListProps) {
  const search = props.search;
  let pokemonList: IPokemon[] = [];

  try {
    pokemonList = await getPokemons(search);
  } catch (error) {
    pokemonList = [];
  }

  if (pokemonList.length === 0)
    return (
      <div className="flex justify-center items-center w-full mt-48">
        <p className="text-2xl">Loading Pokemons...</p>
      </div>
    );

  return (
    <>
      <div className="p-8 flex justify-center items-center">
        {pokemonList.map((data) => (
          <PokemonCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
