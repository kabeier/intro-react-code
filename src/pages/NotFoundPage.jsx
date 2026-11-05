import { Link } from 'react-router'
import Card from 'react-bootstrap/Card'

function NotFoundPage() {
  return (
    <Card body>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Back home</Link>
    </Card>
  )
}

export default NotFoundPage