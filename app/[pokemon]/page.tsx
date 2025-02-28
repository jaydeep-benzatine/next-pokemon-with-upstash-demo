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

  if (success && data?.moves) {
    data = {
      ...data,
      // @ts-expect-error
      moves: data?.moves.map((it) => {
        return it.move.name;
      }) as string[],
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

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
