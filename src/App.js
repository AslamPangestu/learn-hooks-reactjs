import React, { useState } from 'react'

function App() {
  return (
    <form>
      <input type='text' placeholder='Name' {...useInputText()} />
      <input type='text' placeholder='Surename' {...useInputText()} />
      <input type='number' placeholder='Age' {...useInputText()} />
    </form>
  )
}

function useInputText() {
  const [value, setValue] = useState('')

  function onChange(event) {
    setValue(event.target.value)
  }

  return {
    value,
    onChange
  }
}

export default App
