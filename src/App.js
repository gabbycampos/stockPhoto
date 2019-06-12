import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import PhotoGallery from './components/PhotoGallery';
import SignUp from './components/Auth/SignUp';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/photo" component={PhotoGallery} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          </div>
          <footer>
            <h6>test</h6>
          </footer>
      </Router>
    );

  }
}



export default App;



     
      
/*

      <div id="footer">
        <div className="row">
          <div className="col-md-6 text-center">
            <h6>Woo! Thanks for reaching the bottom of the page.</h6>
          </div>
          <div className="col-md-4 text-right">

          </div>
        </div>
      </div>*/



      
