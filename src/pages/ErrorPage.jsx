import { Link, isRouteErrorResponse, useRouteError } from 'react-router'
import Card from 'react-bootstrap/Card'

function ErrorPage() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error.message

  return (
    <Card body>
      <h2>Something went wrong</h2>
      <p>{message}</p>
      <Link to="/">Back home</Link>
    </Card>
  )
}

export default ErrorPage