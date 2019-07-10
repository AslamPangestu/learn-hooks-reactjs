import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activated: false
    }
  }

  handleActiveChange = () => {
    // this.setState({ activated: !this.state.activated })
    this.setState(prevState => ({
      activated: !prevState.activated
    }))
  }

  render() {
    const btnText = this.state.activated
      ? this.props.activeText
      : this.props.inactiveText
    return <button onClick={this.handleActiveChange}>{btnText}</button>
  }
}
class App extends Component {
  render() {
    return <Button activeText='On' inactiveText='Off' />
  }
}

export default App
