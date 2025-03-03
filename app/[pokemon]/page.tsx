import PokemonPhotoGallery from '@/components/pokemon-photo-gallery';
import { z } from 'zod';

const schema = z.object({
  moves: z.array(
    z.object({
      move: z.object({
        name: z.string(),
      }),
    })
  ),
  name: z.string(),
  order: z.coerce.number(),
  // sprites: z.record(z.string(), z.string()),
  sprites: z.any(),
  stats: z.any(),
  types: z.any(),
  weight: z.coerce.number(),
});

async function getPokemonDetail(name: string) {
  const url = process.env.NEXT_POKEMON_API + `/${name}`;
  const response = await fetch(url);

  if (!response.ok) return { success: false, message: 'Not found', data: {} };

  const jsonResponse = await response.json();

  let { success, data, error } = schema.safeParse(jsonResponse);

  if (success) {
    data = {
      ...data,
      // @ts-expect-error
      moves: data?.moves.map((it) => {
        return it.move.name;
      }),
      sprites:
        Object.values(data?.sprites).filter((it) => typeof it === 'string') ||
        [],
    };
  }

  return { message: 'Pokemon detail', success: success, data: data };
}

export default async function PokemonDetail({
  params,
}: {
  params: Promise<{ pokemon: string }>;
}) {
  const pokemon = (await params).pokemon;
  const data = await getPokemonDetail(pokemon);

  if (!data || !data.data) return <p>Not found</p>;

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <>
      <PokemonPhotoGallery sprites={data.data.sprites ?? []} />
    </>
  );
}
