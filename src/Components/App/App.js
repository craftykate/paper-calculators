import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import {bagCalculations} from '../../utils/calculations';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Bag from '../Bag/Bag';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      depth: '',
      showInstructions: false,
      errorMessage: null,
      directions: ''
    }
  }

  setTitle(name) {
    name === "" ? document.title = `Kate's Calculators` : document.title = `Kate's Calculators | ${name}`;
  }

  updateValues = (event, field) => {
    if (!isNaN(event.target.value)) {
      this.setState({
        errorMessage: null,
        [field]: event.target.value
      })
    } else {
      this.showError("Only numbers and decimal points allowed");
    }
  }

  showError = (msg) => {
    this.setState({
      errorMessage: msg,
      showInstructions: false
    })
  }

  reset = () => {
    this.setState({
      height: '',
      width: '',
      depth: '',
      errorMessage: null
    })
  }

  checkInputs = (type) => {
    // if it's a bag or a box and all the fields are there
    if ((type === 'bag' && (this.state.height && this.state.width && this.state.depth)) || (type === 'box' && (this.state.height && this.state.width && this.state.depth))) {
      // launch the right calculator
      type === 'bag' ? this.showInstructions(this.calculateBag()) : this.showInstructions(this.calculateBox());
    // if it's an envelope and all the fields are there
    } else if (type === 'envelope' && (this.state.height && this.state.width)) {
      // launch the right calculator
      this.showInstructions(this.calculateEnvelope());
    // all the fields aren't there, so show error message
    } else {
      this.showError("Every measurement is required");
    }
  }

  calculateBag = () => {
    return bagCalculations.calculateBag(this.state.height, this.state.width, this.state.depth);
  }

  calculateBox = () => {

  }

  calculateEnvelope = () => {

  }

  showInstructions = (directions) => {
    this.setState({
      errorMessage: null,
      showInstructions: true,
      directions: directions
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div id="wrapper">
            <div id="content">
              <Route exact path="/" render={props => <Home title={this.setTitle} />} />
              <Route path="/bag" render={props =>
                  <Bag
                    state={this.state}
                    updateValues={this.updateValues}
                    checkInputs={this.checkInputs}
                    reset={this.reset}
                    title={this.setTitle}
                  />
              }/>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
