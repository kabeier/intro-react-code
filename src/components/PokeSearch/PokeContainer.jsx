import PokeCard from './PokeCard'

function PokeContainer({ pokemonList, rmData }) {
  return (
    <div id="poke-container">
      {pokemonList.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} rmData={rmData} />
      ))}
    </div>
  )
}

export default PokeContainer