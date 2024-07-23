import React from 'react'
import Link from 'next/link'

const PokeCard = ({ name, id, image, types, abilities, height, weight }) => {
  return (
    <Link href={`/pokemon/${id}`}>
      <div className="block max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="mt-4">
            <p className="text-gray-700 text-base"><strong>Types:</strong> {types.join(', ')}</p>
            <p className="text-gray-700 text-base"><strong>Abilities:</strong> {abilities.join(', ')}</p>
            <p className="text-gray-700 text-base"><strong>Height:</strong> {height} decimetres</p>
            <p className="text-gray-700 text-base"><strong>Weight:</strong> {weight} hectograms</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PokeCard;
