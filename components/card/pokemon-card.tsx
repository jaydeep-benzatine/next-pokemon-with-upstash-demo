import { IPokemon } from '@/types';

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  return (
    <div
      id="card"
      className="bg-slate-200 h-72 w-full max-w-72 rounded-md p-2 m-2 text-black"
    >
      <img src={pokemon.photoUrl} className='w-full' alt={pokemon.name} />
      <p className='text-center'>{pokemon.name}</p>
    </div>
  );
}
