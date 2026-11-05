import axios from 'axios'
import './App.css'

function App() {
  const getPokemonData = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Request failed:", error.message))
      .finally(() => console.log("Request completed"))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    const name = data.name.trim().toLowerCase()
    if (!name) return
    getPokemonData(name)
    event.target.reset()
  }

  return (
    <>
      <header>
        <h1>Pokemon Project</h1>
      </header>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="pokemon-name">Pokemon Name</label>
        <input id="pokemon-name" type="text" name="name" placeholder="pikachu" />
        <button type="submit">Search</button>
      </form>
      <div id="poke-container"></div>
    </>
  )
}

export default App