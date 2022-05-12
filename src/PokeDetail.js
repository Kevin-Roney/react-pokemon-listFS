import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils.js';

export default function PokeDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const pokemonData = await getSinglePokemon(params.id);

      setPokemon(pokemonData);
    }
    fetch();
  }, [params.id]);
  return (
    <>
      <Link to='/'>Home</Link>
      <div className='poke-detail'>
        <h2>{pokemon.name}</h2>
        <p>Pokedex Number: {pokemon.id}</p>
        <p>Type: {pokemon.type1} & {pokemon.type2}</p>
        <p>HP: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Sp. Attack: {pokemon.sp_attack}</p>
        <p>Sp. Defense: {pokemon.sp_defense}</p>
        <p>Speed: {pokemon.speed}</p>
      </div>
    </>
  );
}
