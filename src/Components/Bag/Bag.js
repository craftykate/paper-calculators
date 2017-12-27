import React, { Component } from 'react';
import './Bag.css';
import Calculator from '../Calculator/Calculator';


class Bag extends Component {


  render() {
    this.props.title("Gift Bag");
    let instructions = null;
    if (this.props.state.showInstructions) {
      instructions = (
        <div className="instructions">
          <h3 className="instructions">Instructions:</h3>
          {this.props.state.directions}
        </div>
      );
    }
    let errorMessage = " ";
    if (this.props.state.errorMessage) {
      errorMessage = this.props.state.errorMessage
    }
    return (
      <div className="calculator">
        <h2>Gift Bag Calculator</h2>
        <p className="description">Enter all measurements in inches as decimal numbers. Ex: 4.5</p>
        <p className="inputTitle">Enter bag height (top to bottom):</p>
        <input
          value={this.props.state.height}
          onChange={(event) => this.props.updateValues(event, 'height')}
          />
        <p className="inputTitle">Enter bag width (left to right)</p>
        <input
          value={this.props.state.width}
          onChange={(event) => this.props.updateValues(event, 'width')}
          />
        <p className="inputTitle">Enter bag depth (front to back)</p>
        <input
          value={this.props.state.depth}
          onChange={(event) => this.props.updateValues(event, 'depth')}
          />
        <p
          onClick={() => this.props.checkInputs('bag')}
          className="button">
          Calculate
        </p>
        <a
          onClick={this.props.reset}
          className="clear">clear
        </a>
        <p className="error">{errorMessage}</p>
        {instructions}
      </div>
    );
  }
}

export default Bag;
