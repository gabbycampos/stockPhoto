import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './main.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
                        <Link className="navbar-brand" to="/">Stock Photos</Link>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-right">
                               <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Log Out</Link>
                                </li> 
                                
                            </ul>
                        </div>
                    </nav>
                </header>

            </div>
        )
    }
}


