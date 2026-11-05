import { useState, useEffect } from 'react'
import Button from '../Button'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightsalmon']
    document.body.style.backgroundColor = colors[count % colors.length]
  }, [count])

  return (
    <section className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
      <h3 className="text-lg font-semibold">Total Clicks: {count}</h3>
      <Button onClick={() => setCount((count) => count + 1)}>Click me!</Button>
    </section>
  )
}

export default Counter