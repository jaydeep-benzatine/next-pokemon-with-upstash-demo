import type { IPokemon } from '@/types';

type IPokemonCardProps = {
  data: IPokemon;
};

export function PokemonCard(props: IPokemonCardProps) {
  return (
    <>
      <div className="w-48 flex flex-col">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`}
          alt="charizard"
          className="w-full"
        />
        <p className="text-xl text-center">{props.data.name}</p>
      </div>
    </>
  );
}
