import React, { Component } from 'react';
import './main.css'

export default class Photo extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img" src={this.props.photo.image} alt={this.props.photo.alt} />
      </div>
      
    )
  }
}
