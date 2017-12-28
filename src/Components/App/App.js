import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import calculations from '../../utils/calculations';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Bag from '../Bag/Bag';
import Envelope from '../Envelope/Envelope';
import Box from '../Box/Box';
import More from '../More/More';
import Footer from '../Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      depth: '',
      decimal: '',
      showInstructions: false,
      errorMessage: null,
      variables: ''
    }
  }

  // set tab title
  setTitle(name) {
    name === "" ? document.title = `Kate's Calculators` : document.title = `Kate's Calculators | ${name}`;
  }

  // update state with each keystroke in input fields if it's a number
  updateValues = (event, field) => {
    if (!isNaN(event.target.value)) {
      this.setState({
        errorMessage: null,
        [field]: event.target.value
      })
    // with input type="number" this is no longer being reached because the input itself will only allow numbers
    } else {
      this.showError("Only numbers and decimal points allowed");
    }
  }

  // show error message
  // with input type="number" this is no longer being reached because the input itself will only allow numbers
  showError = (msg) => {
    this.setState({
      errorMessage: msg,
      showInstructions: false
    })
  }

  // clear calculator input fields variables
  reset = () => {
    this.setState({
      height: '',
      width: '',
      depth: '',
      decimal: '',
      errorMessage: null,
      showInstructions: false,
      variables: ''
    })
  }

  // make sure fields are complete and go to correct calculator
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

  // return calculated variables from calculators
  calculateBag = () => {
    return calculations.calculateBag(this.state.height, this.state.width, this.state.depth);
  }
  calculateEnvelope = () => {
    return calculations.calculateEnvelope(this.state.height, this.state.width);
  }
  calculateBox = () => {
    return calculations.calculateBox(this.state.height, this.state.width, this.state.depth);
  }

  runFractions = () => {
    this.showInstructions(calculations.allFractions(this.state.decimal));
  }

  // take instructions from calculators and update state variables
  showInstructions = (calculatedVariables) => {
    this.setState({
      errorMessage: null,
      showInstructions: true,
      variables: calculatedVariables
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header reset={this.reset}/>
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
              <Route path="/envelope" render={props =>
                <Envelope
                  state={this.state}
                  updateValues={this.updateValues}
                  checkInputs={this.checkInputs}
                  reset={this.reset}
                  title={this.setTitle}
                />
              }/>
              <Route path="/box" render={props =>
                <Box
                  state={this.state}
                  updateValues={this.updateValues}
                  checkInputs={this.checkInputs}
                  reset={this.reset}
                  title={this.setTitle}
                />
              }/>
            <Route path="/more" render={props =>
                <More
                  state={this.state}
                  updateValues={this.updateValues}
                  checkInputs={this.checkInputs}
                  runFractions={this.runFractions}
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
