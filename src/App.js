import React, { useState } from 'react'

function App() {
  return (
    <div>
      <Display start={10} />
      <Display start={20} />
      <FancyDisplay start={30} />
    </div>
  )
}

function useCounter(startingValue) {
  const [count, setCount] = useState(startingValue)
  function handleIncrease() {
    setCount(prevCount => {
      return prevCount + 1
    })
  }
  function handleDecrease() {
    setCount(prevCount => {
      return prevCount - 1
    })
  }

  return {
    count,
    handleIncrease,
    handleDecrease
  }
}

function Display(props) {
  const { count, handleIncrease, handleDecrease } = useCounter(props.start)
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
    </div>
  )
}

function FancyDisplay(props) {
  const { count, handleIncrease, handleDecrease } = useCounter(props.start)
  return (
    <section>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h2>{count}</h2>
    </section>
  )
}

export default App
