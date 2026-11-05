import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import BsButton from 'react-bootstrap/Button'

function PokeCard({ pokemon, rmData }) {
  const [shiny, setShiny] = useState(false)

  return (
    <Card id={`${pokemon.name}-card`} style={{ width: '15rem' }}>
      <Card.Img variant="top" src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
      <Card.Body>
        <Badge bg="secondary">Pokédex #{pokemon.id}</Badge>
        <Card.Title className="text-capitalize">{pokemon.name}</Card.Title>
        <Stack direction="horizontal" gap={2}>
          <BsButton variant={shiny ? 'secondary' : 'warning'} onClick={() => setShiny((shiny) => !shiny)}>{shiny ? 'Make Normal' : 'Make Shiny'}</BsButton>
          <BsButton variant="danger" onClick={() => rmData(pokemon.id)}>Remove</BsButton>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default PokeCard