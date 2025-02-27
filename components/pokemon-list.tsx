import type { IPokemon } from '@/types';
import { PokemonCard } from './pokemon-card';

type IPokemonListProps = {
  data: IPokemon[];
};

export function PokemonList(props: IPokemonListProps) {
  if (props.data.length === 0)
    return (
      <div className="flex justify-center items-center w-full mt-48">
        <p className="text-2xl">No pokemon found</p>
      </div>
    );

  return (
    <>
      <div className="p-8 flex justify-center items-center">
        {props.data.map((data) => (
          <PokemonCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
