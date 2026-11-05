function PokeCard({ pokemon, rmData, shiny }) {
  return (
    <div className="card" id={`${pokemon.name}-card`}>
      <img src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <button type="button" onClick={() => rmData(pokemon.id)}>Remove</button>
    </div>
  )
}

export default PokeCard