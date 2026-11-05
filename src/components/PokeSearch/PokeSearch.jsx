import { useState, useEffect } from 'react'
import axios from 'axios'
import { useOutletContext } from 'react-router'
import PokeContainer from './PokeContainer'
import PokeForm from './PokeForm'

function PokeSearch() {
  const [pokemonName, setPokemonName] = useState('')
  const { pokemonList, setPokemonList } = useOutletContext()

  useEffect(() => {
    console.log('pokemon list changed', pokemonList)
  }, [pokemonList])

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
    <div className="space-y-6">
      <PokeForm handleSubmit={handleSubmit} pokemonName={pokemonName} setPokemonName={setPokemonName} />
      <PokeContainer pokemonList={pokemonList} rmData={rmData} />
    </div>
  )
}

export default PokeSearch