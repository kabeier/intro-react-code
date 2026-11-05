import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'

function PokemonDetailsPage() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    let ignore = false
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => { if (!ignore) setPokemon(response.data) })
    return () => { ignore = true }
  }, [id])

  if (!pokemon) return <Spinner animation="border" role="status" />

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Card.Body>
        <h2 className="text-capitalize">{pokemon.name} #{pokemon.id}</h2>
        <ul>
          <li>Height: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
          {pokemon.types.map((t) => <li key={t.type.name}>Type: {t.type.name}</li>)}
        </ul>
      </Card.Body>
    </Card>
  )
}

export default PokemonDetailsPage