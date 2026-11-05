import { useState } from 'react'
import Button from '../Button'

function Heading() {
  const [heading, setHeading] = useState('Pokemon Project')

  return (
    <header>
      <h1>{heading}</h1>
      <Button onClick={() => setHeading('Pokemon Project: Day 2')}>Change Title</Button>
    </header>
  )
}

export default Heading