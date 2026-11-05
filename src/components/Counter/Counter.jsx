import { useState, useEffect } from 'react'
import Button from '../Button'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightsalmon']
    document.body.style.backgroundColor = colors[count % colors.length]
  }, [count])

  return (
    <>
      <h3>Total Clicks: {count}</h3>
      <Button onClick={() => setCount((count) => count + 1)}>Click me!</Button>
    </>
  )
}

export default Counter