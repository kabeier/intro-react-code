import { Link } from 'react-router'

function NavBar() {
  return (
    <nav className="mx-auto flex max-w-5xl gap-4 px-6 pt-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default NavBar