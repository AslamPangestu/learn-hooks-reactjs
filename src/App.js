import React, { Component } from 'react'

function Box(props) {
  return (
    <div>
      <h1>Statelsess Component</h1>
      <h1>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}
function App() {
  return <Box text='Testing' subtitle='Test Subtitle' />
}

export default App
