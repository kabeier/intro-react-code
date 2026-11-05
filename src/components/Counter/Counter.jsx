import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightsalmon']
    document.body.style.backgroundColor = colors[count % colors.length]
  }, [count])

  return (
    <>
      <h3>Total Clicks: {count}</h3>
      <button type="button" onClick={() => setCount((count) => count + 1)}>Click me!</button>
    </>
  )
}

export default Counter