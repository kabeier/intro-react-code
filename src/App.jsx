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
    <main className="mx-auto max-w-5xl space-y-6 p-6">
      <Heading />
      <Counter />
      <PokeSearch />
    </main>
  )
}

export default App