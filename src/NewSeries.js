import React, { Component } from 'react'

import api from './Api'

const statuses = {
  "watched": "Assistido",
  "watching": "Assistindo",
  "toWatch": "Assistir"
}

const genres = {
  "drama": "Drama",
  "action": "Ação",
  "romance": "Romance"
}


class NewSeries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "genres": []
    }
    this.saveSeries = this.saveSeries.bind(this)
  }
  componentDidMount() {
    api.loadGenres()
    .then((res) => {
        this.setState({
          genres: res.data
        })
    })
  }

  renderStatus(key) {
    return <option key={key} value={ key }>{ statuses[key] }</option>
  }

  renderGenre(key) {
    return <option key={key} value={ key }>{ key }</option>
  }

  render() {
    return (
      <form>
        <h1 className="text-center">Nova Série</h1>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" ref="name" className="form-control" placeholder="Nome da série" />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" ref="status" className="form-control">
            { Object.keys(statuses).map(key => this.renderStatus(key)) }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Gênero</label>
          <select id="genre" ref="genre" className="form-control">
            { this.state.genres.map(key => this.renderGenre(key)) }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comentários</label>
          <textarea id="comments" ref="comments" className="form-control" rows="3" placeholder="Comentários sobre a série"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.saveSeries}>Salvar</button>
      </form>
    )
  }

  saveSeries() {
    const newSeries = {
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    }
    console.log(newSeries)
  }
}

export default NewSeries
