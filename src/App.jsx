import { useEffect } from 'react'
import Heading from './components/Heading'
import Counter from './components/Counter'
import PokeSearch from './components/PokeSearch'

function App() {
  useEffect(() => {
    console.log('page mounted')
    return () => console.log('page unmounted')
  }, [])

  return (
    <>
      <Heading />
      <Counter />
      <PokeSearch />
    </>
  )
}

export default App