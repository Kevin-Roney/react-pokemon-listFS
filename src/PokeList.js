import React from 'react';
import Pokemon from './Pokemon';

export default function PokeList({ pokemon }) {
  return (
    <div className='pokemanz'>
      {
        pokemon.map((poke) =>
          <Pokemon key={poke.id} pokemon={poke}/>)
      }
    </div>
  );
}
