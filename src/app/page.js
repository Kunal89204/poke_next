"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokeCard from '@/components/PokeCard'

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((respo) => {
        const promises = respo.data.results.map((poke) => axios.get(poke.url));
        Promise.all(promises)
          .then((responses) => {
            const pokemonData = responses.map((respo) => ({
              id: respo.data.id,
              name: respo.data.name,
              image: respo.data.sprites.front_default,
              types: respo.data.types.map(typeInfo => typeInfo.type.name),
              abilities: respo.data.abilities.map(abilityInfo => abilityInfo.ability.name),
              height: respo.data.height,
              weight: respo.data.weight,
            }));
            setData(pokemonData);
            console.log(pokemonData);
          });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data && data.map((dat) => (
        <PokeCard 
          key={dat.id} 
          id={dat.id} 
          name={dat.name} 
          image={dat.image}
          types={dat.types}
          abilities={dat.abilities}
          height={dat.height}
          weight={dat.weight}
        />
      ))}
    </div>
  )
}

export default Page;
