import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [heading, setHeading] = useState('Pokemon Project')
  const [count, setCount] = useState(0)
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonList, setPokemonList] = useState([])

  const addPokemonData = (data) => {
    setPokemonList((list) => (list.some((pokemon) => pokemon.id === data.id) ? list : [...list, data]))
  }

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
      <header>
        <h1>{heading}</h1>
        <button type="button" onClick={() => setHeading('Pokemon Project: Day 2')}>Change Title</button>
      </header>
      <h3>Total Clicks: {count}</h3>
      <button type="button" onClick={() => setCount((count) => count + 1)}>Click me!</button>
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
          <div className="card" id={`${pokemon.name}-card`} key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <button type="button" onClick={() => rmData(pokemon.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App