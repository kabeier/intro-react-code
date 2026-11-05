import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import BsButton from 'react-bootstrap/Button'

function PokeForm({ handleSubmit, pokemonName, setPokemonName }) {
  return (
    <Card body>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Stack direction="horizontal" gap={3} className="align-items-end">
          <Form.Group controlId="pokemon-name">
            <Form.Label>Pokemon Name</Form.Label>
            <Form.Control
              type="text" name="name" placeholder="pikachu"
              value={pokemonName}
              onChange={(event) => setPokemonName(event.target.value)}
            />
          </Form.Group>
          <BsButton variant="success" type="submit">Search</BsButton>
        </Stack>
      </Form>
    </Card>
  )
}

export default PokeForm