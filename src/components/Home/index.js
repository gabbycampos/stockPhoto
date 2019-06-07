import React, { Component } from 'react'
import './main.css'

export default class Home extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push("/photo");
  }

  render() {
    return (
      <div className="container-home">
        <h4>Would you like to browse royalty free stock photos?<span role="img" aria-label="eyes">👀</span></h4>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-button">
              <button className="button">log in</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
