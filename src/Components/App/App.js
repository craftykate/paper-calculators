import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // NavLink,
  // Link
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Bag from '../Bag/Bag';

class App extends Component {
  setTitle(name) {
    name === "" ? document.title = `Kate's Calculators` : document.title = `Kate's Calculators | ${name}`;
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div id="wrapper">
            <Route exact path="/" render={props => <Home title={this.setTitle} />} />
            <Route path="/bag" render={props => <Bag title={this.setTitle} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
