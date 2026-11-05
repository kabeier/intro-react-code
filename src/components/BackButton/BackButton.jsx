import { useLocation, useNavigate } from 'react-router'
import BsButton from 'react-bootstrap/Button'

function BackButton() {
  const navigate = useNavigate()
  const location = useLocation()
  // Opened directly (nothing to go back to): go home instead of leaving the app.
  const goBack = () => (location.key === 'default' ? navigate('/') : navigate(-1))

  return <BsButton variant="light" size="sm" aria-label="Go back" onClick={goBack}>← Back</BsButton>
}

export default BackButton