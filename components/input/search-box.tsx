'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from '@/hooks/use-debounce';

export default function SearchBox({ addPokemon }: { addPokemon: Function }) {
  const [search, setSearch] = useState('');
  const debouceSearch = useDebounce(search, 500);

  function changeHandler(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;

    if (!value) return;

    setSearch(value);
  }

  useEffect(() => {
    if (!debouceSearch) return;

    fetch(`/api/pokemons/${debouceSearch}`)
      .then((result) => {
        if (!result.ok) {
          alert('Pokemon not found');
          return;
        }

        result.json().then((data) => addPokemon(data.pokemon));
      })
      .catch((err) => alert(err));

    return () => {};
  }, [debouceSearch]);

  return (
    <div className="flex m-2 p-2 px-4 mt-5">
      <input
        type="search"
        className="bg-slate-700 min-w-full rounded-md p-3 text-white text-xl placeholder:text-slate-400 placeholder:text-xl"
        name="search"
        id="search"
        placeholder="pikachu..."
        onChange={changeHandler}
      />
    </div>
  );
}
