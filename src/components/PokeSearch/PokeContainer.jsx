import PokeCard from './PokeCard'

function PokeContainer({ pokemonList, rmData, shiny }) {
  return (
    <div id="poke-container">
      {pokemonList.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} rmData={rmData} shiny={shiny} />
      ))}
    </div>
  )
}

export default PokeContainer