function PokeForm({ handleSubmit, pokemonName, setPokemonName }) {
  return (
    <form className="flex items-end gap-3 rounded-xl bg-white p-4 shadow" onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label className="block text-sm font-semibold" htmlFor="pokemon-name">Pokemon Name</label>
        <input
          className="rounded-md border border-slate-300 px-3 py-1.5 focus:outline-2 focus:outline-blue-600"
          id="pokemon-name" type="text" name="name" placeholder="pikachu"
          value={pokemonName}
          onChange={(event) => setPokemonName(event.target.value)}
        />
      </div>
      <button className="rounded-md bg-emerald-600 px-3 py-1.5 font-semibold text-white hover:bg-emerald-700" type="submit">Search</button>
    </form>
  )
}

export default PokeForm