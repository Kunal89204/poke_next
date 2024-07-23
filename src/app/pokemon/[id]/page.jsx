"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonPage = ({ params }) => {
  const [pokemon, setPokemon] = useState(false);
  const { id } = params;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
          <h1 className="text-4xl font-bold mb-4">{pokemon.name}</h1>
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name} 
            className="w-full h-64 object-contain bg-white p-4 rounded-md"
          />
        </div>
        <div className="bg-gray-800 p-6">
          <h2 className="text-2xl font-semibold mb-2">Details</h2>
          <p className="mb-2"><strong>Types:</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
          <p className="mb-2"><strong>Abilities:</strong> {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
          <p className="mb-2"><strong>Height:</strong> {pokemon.height} decimetres</p>
          <p className="mb-2"><strong>Weight:</strong> {pokemon.weight} hectograms</p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Stats</h2>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name} className="mb-1">
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonPage;
