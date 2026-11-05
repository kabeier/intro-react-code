import { useEffect } from 'react'
import Heading from './components/Heading'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router'

function App() {
  useEffect(() => {
    console.log('page mounted')
    return () => console.log('page unmounted')
  }, [])

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl space-y-6 p-6">
        <Heading />
        <Outlet />
      </main>
    </>
  )
}

export default App