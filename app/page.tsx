'use client';

import PokemonCard from '@/components/card/pokemon-card';
import SearchBox from '@/components/input/search-box';
import PokemonList from '@/components/list/pokemon-list';
import { IPokemon } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  function addPokemon(data: IPokemon): void {
    setPokemonList((prev) => [...prev, data]);
  }

  useEffect(() => {
    async function getAllPokemon() {
      const result = await fetch('/api/pokemons');

      if (!result.ok) return;

      const data = await result.json();

      setPokemonList(data);
      console.log('Pokemon list is initialize');
    }

    getAllPokemon();

    return () => {
      setPokemonList([]);
    };
  }, []);

  return (
    <>
      <section id="hero" className="mt-5">
        <div className="text-white text-center">
          <h1 className="text-4xl fond-semibold">Welcome to Pokedex</h1>
          <p className="mt-4 text-md">Pokemon information garage</p>
        </div>
      </section>
      <section id="search-section">
        <SearchBox addPokemon={addPokemon} />
      </section>
      <main
        id="content"
        className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
      >
        <PokemonList data={pokemonList} />
      </main>
    </>
  );
}
