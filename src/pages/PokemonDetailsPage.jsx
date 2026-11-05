import { useParams } from 'react-router'

function PokemonDetailsPage() {
  const { id } = useParams()

  return <h2>Pokemon #{id}</h2>
}

export default PokemonDetailsPage