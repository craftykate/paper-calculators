import React, { Component } from 'react';
import './Bag.css';
import Calculator from '../Calculator/Calculator';


class Bag extends Component {


  render() {
    this.props.title("Gift Bag");

    let inputs = [
      ["height", "Enter bag height (top to bottom)"],
      ["width", "Enter bag width (left to right)"],
      ["depth", "Enter bag depth (front to back)"]
    ]

    return (
      <Calculator
        name="Gift Bag Calculator"
        state={this.props.state}
        inputs={inputs}
        calculatorType='bag'
        updateValues={this.props.updateValues}
        checkInputs={this.props.checkInputs}
        reset={this.props.reset}
      />
    );
  }
}

export default Bag;
