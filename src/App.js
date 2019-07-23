import React, { useState } from 'react'

function App() {
  const { value: name, changeHandler: changeName } = useInputText()
  const { value: surename, changeHandler: changeSurename } = useInputText()
  const { value: age, changeHandler: changeAge } = useInputText()
  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={changeName}
      />
      <input
        type='text'
        placeholder='Surename'
        value={surename}
        onChange={changeSurename}
      />
      <input type='number' placeholder='Age' value={age} onChange={changeAge} />
    </form>
  )
}

function useInputText() {
  const [value, setValue] = useState('')

  function changeHandler(event) {
    setValue(event.target.value)
  }

  return {
    value,
    changeHandler
  }
}

export default App
