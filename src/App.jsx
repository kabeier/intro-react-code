import { useEffect, useState } from 'react'
import Heading from './components/Heading'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    console.log('page mounted')
    return () => console.log('page unmounted')
  }, [])

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl space-y-6 p-6">
        <Heading />
        <Outlet context={{ pokemonList, setPokemonList }} />
      </main>
    </>
  )
}

export default App