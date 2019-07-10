import React, { useState } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClickIncrease = this.handleClickIncrease.bind(this)
    this.handleClickDecrease = this.handleClickDecrease.bind(this)
  }

  handleClickIncrease() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  handleClickDecrease() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickIncrease}>Increase</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickDecrease}>Decrease</button>
      </div>
    )
  }
}

export default App
