'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

export function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const fd = new FormData(evt.currentTarget);
    const search = fd.get('search');

    router.push(`?search=${search}`);
  }

  return (
    <>
      <section id="search-box">
        <form onSubmit={onSubmit} className="p-2 flex justify-center">
          <input
            defaultValue={searchParams.get('search') || ''}
            type="search"
            name="search"
            id="search"
            className="w-3/4 rounded-full h-12 px-6 text-black"
            placeholder="search the pokemon to add into home page..."
          />
        </form>
      </section>
    </>
  );
}
