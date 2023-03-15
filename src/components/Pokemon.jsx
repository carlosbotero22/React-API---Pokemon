import React, { useEffect, useState } from 'react';

const Pokemon = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    async function obtenerPokemones() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      );
      const data = await response.json();

      setPokemones(data.results);
      console.log(data);
    }
    obtenerPokemones();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Pokemones</h1>
      <ul>
        {pokemones.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
