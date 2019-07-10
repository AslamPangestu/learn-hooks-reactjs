import React, { useState } from 'react'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//     this.handleClickIncrease = this.handleClickIncrease.bind(this)
//     this.handleClickDecrease = this.handleClickDecrease.bind(this)
//   }

//   handleClickIncrease() {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }))
//   }

//   handleClickDecrease() {
//     this.setState(prevState => ({
//       count: prevState.count - 1
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClickIncrease}>Increase</button>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClickDecrease}>Decrease</button>
//       </div>
//     )
//   }
// }

function App() {
  const [count, setCount] = useState(0)
  // const handleIncrease = () => setCount(count + 1)
  // const handleDecrease = () => setCount(count - 1)
  // const handleReset = () => setCount(0)
  function handleIncrease() {
    setCount(prevCount => {
      return prevCount + 1
    })
  }
  const handleDecrease = () =>
    setCount(prevCount => {
      return prevCount - 1
    })

  function handleReset() {
    setCount(prevCount => {
      return 0
    })
  }
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App
