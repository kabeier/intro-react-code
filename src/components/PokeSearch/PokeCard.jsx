import { useState } from 'react'
import Button from '../Button'

function PokeCard({ pokemon, rmData }) {
  const [shiny, setShiny] = useState(false)

  return (
    <div id={`${pokemon.name}-card`} className="w-60 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-md">
      <img className="mx-auto h-32" src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
      <p className="text-sm text-slate-500">Pokédex #{pokemon.id}</p>
      <h3 className="text-xl font-bold capitalize">{pokemon.name}</h3>
      <div className="mt-3 flex justify-center gap-2">
        <Button onClick={() => setShiny((shiny) => !shiny)}>{shiny ? 'Make Normal' : 'Make Shiny'}</Button>
        <Button onClick={() => rmData(pokemon.id)}>Remove</Button>
      </div>
    </div>
  )
}

export default PokeCard