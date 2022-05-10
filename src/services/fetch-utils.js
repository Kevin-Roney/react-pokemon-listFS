import { client } from './client';

export async function getPokemon(from, to) {
  const response = await client
    .from('pokemon')
    .select()
    .range(from, to);

  return response.body;
}

export async function getSinglePokemon(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();

  return response.body;
}