import React from 'react';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import PokeList from './PokeList';


export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage - 1;
      const pokeData = await getPokemon(from, to);

      setPokemon(pokeData);
    }
    fetch();
  }, [page]);
  
  return (
    <>
      <h1>Click on a Pokemon to view its stats!</h1>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button disabled={page >= 8} onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <PokeList pokemon={pokemon}/>
    </>
  );
}
