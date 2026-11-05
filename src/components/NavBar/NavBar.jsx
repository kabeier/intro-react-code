import { Link } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BackButton from '../BackButton'

function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" style={{ paddingInline: '1.5rem' }}>
      <Navbar.Brand as={Link} to="/">PokeSearch</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
      </Nav>
      <BackButton />
    </Navbar>
  )
}

export default NavBar