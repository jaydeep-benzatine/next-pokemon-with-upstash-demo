import type { IPokemon } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type IPokemonCardProps = {
  data: IPokemon;
};

export function PokemonCard(props: IPokemonCardProps) {
  return (
    <>
      <div className="w-48 flex flex-col">
        <Link href={`/${props.data.name}/v2`}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`}
            alt={props.data.name}
            width={192}
            height={192}

          />
          <p className="text-xl text-center">{props.data.name}</p>
        </Link>
      </div>
    </>
  );
}
