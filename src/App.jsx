import axios from 'axios'
import './App.css'

function App() {
  const generateCard = (data) => {
    if (document.getElementById(`${data.name}-card`)) return
    const card = document.createElement("div")
    card.className = "card"
    card.id = `${data.name}-card`
    const img = document.createElement("img")
    img.src = data.sprites.front_default
    img.alt = data.name
    card.appendChild(img)
    const h3 = document.createElement("h3")
    h3.textContent = data.name
    card.appendChild(h3)
    document.querySelector("#poke-container").appendChild(card)
  }

  const getPokemonData = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      generateCard(response.data)
    } catch (error) {
      console.error("Request failed:", error.message)
      alert("Pokemon Does not Exist")
    } finally {
      console.log("Request completed")
    }
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