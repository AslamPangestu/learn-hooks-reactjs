import React, { createContext, useState, useContext } from 'react'

const NameContext = createContext()

function App() {
  const [name, setName] = useState('Budi')
  return (
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  )
}

function Child() {
  return (
    <section className='child'>
      <GrandChild />
    </section>
  )
}

function GrandChild() {
  return (
    <div className='child'>
      <Button />
    </div>
  )
}

function Button() {
  const name = useContext(NameContext)
  return <button>{name}</button>
}

export default App
