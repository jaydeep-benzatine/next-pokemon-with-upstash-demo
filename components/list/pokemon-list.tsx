import { IPokemon } from '@/types';
import PokemonCard from '../card/pokemon-card';

export default function PokemonList({ data }: { data: IPokemon[] }) {
  if (data.length === 0) return null;

  return data.map((pokemon, idx) => (
    <PokemonCard key={`pokemon-${idx}-${pokemon.id}`} pokemon={pokemon} />
  ));
}
