function App() {
  let message = "Hello Pokemon trainers"
  const sayHello = () => "Hello from a function"
  return (
    <>
      <h1>Pokemon Project</h1>
      <p>{message}</p>
      <p>{sayHello()}</p>
    </>
  )
}

export default App