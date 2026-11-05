import { useState } from 'react'
import { useNavigate } from 'react-router'
import Form from 'react-bootstrap/Form'
import BsButton from 'react-bootstrap/Button'

function LoginPage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!username.trim()) return
    navigate('/')
  }

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: '20rem' }}>
      <h2>Log In</h2>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={(event) => setUsername(event.target.value)} />
      </Form.Group>
      <BsButton type="submit">Log In</BsButton>
    </Form>
  )
}

export default LoginPage