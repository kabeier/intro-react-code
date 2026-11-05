import { useState } from 'react'
import Button from '../Button'

function Heading() {
  const [heading, setHeading] = useState('Pokemon Project')

  return (
    <header className="flex items-center justify-between rounded-xl bg-slate-800 p-4 text-white">
      <h1 className="text-3xl font-bold">{heading}</h1>
      <Button onClick={() => setHeading('Pokemon Project: Day 2')}>Change Title</Button>
    </header>
  )
}

export default Heading