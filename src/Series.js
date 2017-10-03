import React, { Component } from 'react'


class Series extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  renderSeries() {
    return (
      <div className="col-md-4">
        <div className="card text-center">
          <img className="card-img-top" src="holder.js/100px180?bg=#767676" />
          <div className="card-body">
            <h4 className="card-title">How I met your mother</h4>
            <p className="card-text">Drama</p>
            <a href="#" class="btn btn-primary">Gerenciar</a>
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
          {this.renderSeries()}
          {this.renderSeries()}
          {this.renderSeries()}
          {this.renderSeries()}
          {this.renderSeries()}
        </div>
      </div>
    )
  }
}

export default Series
