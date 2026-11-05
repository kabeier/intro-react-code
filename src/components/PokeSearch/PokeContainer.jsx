import PokeCard from './PokeCard'

function PokeContainer({ pokemonList, rmData }) {
  return (
    <div id="poke-container" className="flex flex-wrap gap-5">
      {pokemonList.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} rmData={rmData} />
      ))}
    </div>
  )
}

export default PokeContainer