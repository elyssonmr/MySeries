import React, { Component } from 'react'
import Ola from './ola'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    setInterval(() => this.setState({count: this.state.count + 1}), 1000)
  }

  render() {
    return (
      <div>
        <Ola name="Elysson"></Ola>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}

export default App
