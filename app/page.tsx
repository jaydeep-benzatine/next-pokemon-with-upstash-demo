import getPokemons from '@/backend/data-access/getPokemons';
import { PokemonList } from '@/components/pokemon-list';
import { SearchBox } from '@/components/search-box';

import type { IPokemon, ISearchParam } from '@/types';

type IPageProps = { searchParams: ISearchParam };

export default async function Home({ searchParams }: IPageProps) {
  const search = searchParams.search as string;

  let pokemonList: IPokemon[] = [];

  try {
    pokemonList = await getPokemons(search);
  } catch (error) {
    pokemonList = [];
  }

  return (
    <>
      <section
        id="header"
        className="p-4 flex flex-col items-center gap-2 my-5"
      >
        <h2 className="font-mono text-4xl font-semibold">Welcome to Pokedex</h2>
        <p className="text-semibold text-base">pokemon information database</p>
      </section>
      <main id="content" className="flex-1 p-6">
        <SearchBox />

        <PokemonList data={pokemonList} />
      </main>
    </>
  );
}
