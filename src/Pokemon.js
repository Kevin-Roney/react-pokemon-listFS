import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <Link className='pokemon-list-item' to={`/pokemon/${pokemon.id}`}>
      <h4>{pokemon.name}</h4>
      <p>Pokedex Number: {pokemon.id}</p>
      <p>Type: {pokemon.type1} & {pokemon.type2}</p>
    </Link>
  );
}
