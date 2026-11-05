import { useEffect, useState } from 'react'
import axios from 'axios'
import Heading from './components/Heading'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('page mounted')
    return () => console.log('page unmounted')
  }, [])

  useEffect(() => {
    let ignore = false
    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((response) => {
        if (ignore) return
        setPokemonList((list) => (list.some((pokemon) => pokemon.id === response.data.id) ? list : [...list, response.data]))
      })
    return () => { ignore = true }
  }, [])

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl space-y-6 p-6">
        <Heading />
        <Outlet context={{ pokemonList, setPokemonList, count, setCount }} />
      </main>
    </>
  )
}

export default App