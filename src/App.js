import React, { useState } from 'react'

function App() {
  const [activated, setActivated] = useState(false)
  const btnText = activated ? 'ON' : 'OFF'

  const onClick = () => setActivated(!activated)
  return <button onClick={onClick}>{btnText}</button>
}

export default App
