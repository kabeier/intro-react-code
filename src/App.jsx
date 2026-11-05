import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Pokemon Project</h1>
      </header>
      <form>
        <label htmlFor="pokemon-name">Pokemon Name</label>
        <input id="pokemon-name" type="text" name="name" placeholder="pikachu" />
        <button type="submit">Search</button>
      </form>
      <div id="poke-container"></div>
    </>
  )
}

export default App