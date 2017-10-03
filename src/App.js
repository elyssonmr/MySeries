import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

import Header from "./Header"
import Home from './Home'
import NewSeries from "./NewSeries"
import Series from './Series'

const About = () => <p>Sobre</p>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/new-series" component={NewSeries} />
          <Route path="/series/:genre" component={Series} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
