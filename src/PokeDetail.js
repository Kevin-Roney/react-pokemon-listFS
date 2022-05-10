import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokeDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const pokemonData = getSinglePokemon(params.id);
      setPokemon(pokemonData);
    }
    fetch();
  }, [params.id]);
  return (
    <div>PokeDetail</div>
  );
}
