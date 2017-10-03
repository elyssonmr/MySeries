import React, { Component } from 'react'

import api from "./Api"


class Series extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: []
    }
  }
  componentDidMount() {
    api.loadSeriesByGenre(this.props.match.params.genre)
      .then((resp) => {
        this.setState({
          series: resp.data
        })
      })
  }

  renderSeries(series) {
    return (
      <div className="col-md-4">
        <div className="card text-center">
          <img className="card-img-top" src="holder.js/100px180?bg=#767676" alt="Series Cover"/>
          <div className="card-body">
            <h4 className="card-title">{series.name}</h4>
            <p className="card-text">{series.genre} / {series.status}</p>
            <a href="" className="btn btn-primary">Gerenciar</a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Séries {this.props.match.params.genre}</h1>
        <div className="row">
          {this.state.series.map(this.renderSeries)}
        </div>
      </div>
    )
  }
}

export default Series
