import { useState, useEffect } from 'react'
import Button from '../Button'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightsalmon']
    document.body.style.backgroundColor = colors[count % colors.length]
  }, [count])

  return (
    <Card body>
      <Stack direction="horizontal" gap={3}>
        <h3 className="mb-0">Total Clicks: {count}</h3>
        <Button onClick={() => setCount((count) => count + 1)}>Click me!</Button>
      </Stack>
    </Card>
  )
}

export default Counter