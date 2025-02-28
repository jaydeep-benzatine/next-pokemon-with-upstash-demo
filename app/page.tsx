import getPokemons from '@/backend/data-access/getPokemons';
import { PokemonList } from '@/components/pokemon-list';
import { SearchBox } from '@/components/search-box';

import type { IPokemon, ISearchParam } from '@/types';
import { Suspense } from 'react';

type IPageProps = { searchParams: Promise<ISearchParam> };

function PokemonLoader() {
  return (
    <div className="flex justify-center items-center w-full mt-48">
      <p className="text-2xl">Loading Pokemons...</p>
    </div>
  );
}

export default async function Home({ searchParams }: IPageProps) {
  const search = (await searchParams).search as string;

  return (
    <>
      <SearchBox />

      <Suspense fallback={<PokemonLoader />}>
        <PokemonList search={search} />
      </Suspense>
    </>
  );
}
