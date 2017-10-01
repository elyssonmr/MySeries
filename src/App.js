import React, { Component } from 'react'
import Ola from './Ola'
import api from './Api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }
  renderGenreListItem(genre) {
    return (<li className="list-group-item">{genre}</li>)
  }

  render() {
    return (
      <div>
        <Ola name="Elysson"></Ola>
        <ul className="list-group">
          <li className="list-group-item active">Genreros</li>
          {this.state.genres.map(this.renderGenreListItem)}
        </ul>
      </div>
    )
  }
}

export default App
