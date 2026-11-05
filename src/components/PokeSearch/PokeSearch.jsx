import { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './PokeCard'

function PokeSearch() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    console.log('pokemon list changed', pokemonList)
  }, [pokemonList])

  const addPokemonData = (data) => {
    setPokemonList((list) => (list.some((pokemon) => pokemon.id === data.id) ? list : [...list, data]))
  }

  useEffect(() => {
    let ignore = false
    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((response) => { if (!ignore) addPokemonData(response.data) })
    return () => { ignore = true }
  }, [])

  const rmData = (id) => {
    setPokemonList((list) => list.filter((pokemon) => pokemon.id !== id))
  }

  const getPokemonData = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      addPokemonData(response.data)
    } catch (error) {
      console.error("Request failed:", error.message)
      alert("Pokemon Does not Exist")
    } finally {
      console.log("Request completed")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = pokemonName.trim().toLowerCase()
    if (!name) return
    getPokemonData(name)
    setPokemonName('')
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="pokemon-name">Pokemon Name</label>
        <input
          id="pokemon-name" type="text" name="name" placeholder="pikachu"
          value={pokemonName}
          onChange={(event) => setPokemonName(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div id="poke-container">
        {pokemonList.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} rmData={rmData} />
        ))}
      </div>
    </>
  )
}

export default PokeSearch