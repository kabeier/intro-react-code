import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from '../components/Button'

function AboutPage() {
  const [crash, setCrash] = useState(false)
  if (crash) throw new Error('This page intentionally crashed')

  return (
    <Card body>
      <h2>About This App</h2>
      <p>Search the PokeAPI, collect cards, and make them shiny.</p>
      <Button onClick={() => setCrash(true)}>Test errorElement</Button>
    </Card>
  )
}

export default AboutPage