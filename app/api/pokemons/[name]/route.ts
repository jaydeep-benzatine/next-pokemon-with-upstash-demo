import fetchBokemonByName from '@/backend/pokemon/fetchPokemonByName';
import client from '@/backend/redis/client';
import { IPokemon } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const pokemonName = (await params).name?.toLowerCase();

  const cachePokemon = await client.get(pokemonName);

  if (cachePokemon) {
    return NextResponse.json(
      { pokemon: cachePokemon },
      { headers: { 'x-cache': 'HIT' } }
    );
  }

  try {
    const pokemonDetails = await fetchBokemonByName(pokemonName);

    await client.set(pokemonName, JSON.stringify(pokemonDetails));

    return NextResponse.json(
      { pokemon: pokemonDetails },
      { headers: { 'x-cache': 'MISS' } }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Pokemon not found' }, { status: 400 });
  }
}
