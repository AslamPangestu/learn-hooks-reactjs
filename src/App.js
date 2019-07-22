import React, { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  function handleIncrease() {
    setCount(prevCount => {
      return prevCount + 1
    })
  }

  const handleDecrease = () =>
    setCount(prevCount => {
      return prevCount - 1
    })

  useEffect(() => {
    console.log(`I'm Inside useEffect func. The current count = ${count}`)

    return () => {
      console.log(`Remove anytihng, last count = ${count}`)
    }
  })

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
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
