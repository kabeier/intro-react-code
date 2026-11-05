import { useState } from 'react'
import Button from '../Button'

function PokeCard({ pokemon, rmData }) {
  const [shiny, setShiny] = useState(false)

  return (
    <div className="card" id={`${pokemon.name}-card`}>
      <img src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <Button onClick={() => setShiny((shiny) => !shiny)}>{shiny ? 'Make Normal' : 'Make Shiny'}</Button>
      <Button onClick={() => rmData(pokemon.id)}>Remove</Button>
    </div>
  )
}

export default PokeCard