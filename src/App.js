import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from "./Header"
import Home from './Home'
import NewSeries from "./NewSeries"


const About = () => <p>Sobre</p>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/new-series" component={NewSeries} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
