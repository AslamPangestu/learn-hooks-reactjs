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
  // const handleClickIncrease = () => setCount(count + 1)
  // const handleClickDecrease = () => setCount(count - 1)
  const handleClickIncrease = () =>
    setCount(prevCount => {
      return prevCount + 1
    })
  const handleClickDecrease = () =>
    setCount(prevCount => {
      return prevCount - 1
    })
  return (
    <div>
      <button onClick={handleClickIncrease}>Increase</button>
      <h1>{count}</h1>
      <button onClick={handleClickDecrease}>Decrease</button>
    </div>
  )
}

export default App
