import { useState } from 'react'

function Heading() {
  const [heading, setHeading] = useState('Pokemon Project')

  return (
    <header>
      <h1>{heading}</h1>
      <button type="button" onClick={() => setHeading('Pokemon Project: Day 2')}>Change Title</button>
    </header>
  )
}

export default Heading