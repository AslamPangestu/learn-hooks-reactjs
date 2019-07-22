import React, { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('salmon')
  function handleIncrease() {
    setCount(prevCount => {
      return prevCount + 1
    })
  }

  const handleDecrease = () =>
    setCount(prevCount => {
      return prevCount - 1
    })

  function handleColorChange() {
    const nextColor = color === 'salmon' ? 'gold' : 'salmon'
    setColor(nextColor)
  }

  useEffect(() => {
    console.log(`I'm Inside useEffect func. The current count = ${count}`)

    return () => {
      console.log(`Remove anytihng, last count = ${count}`)
    }
  }, [count])

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleColorChange}>Change color</button>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  )
}
function App() {
  const [visibel, setVisibel] = useState(false)
  return (
    <div>
      <button onClick={() => setVisibel(!visibel)}>Show/Hide Component</button>
      {visibel && <Counter />}
    </div>
  )
}

export default App
