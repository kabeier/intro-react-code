function PokeForm({ handleSubmit, pokemonName, setPokemonName }) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="pokemon-name">Pokemon Name</label>
      <input
        id="pokemon-name" type="text" name="name" placeholder="pikachu"
        value={pokemonName}
        onChange={(event) => setPokemonName(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default PokeForm