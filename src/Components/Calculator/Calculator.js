import React from 'react';
import './Calculator.css';

// Pick one:
// More complex
const Calculator = (props) => {
  return (
      <div className="calculator">
        <h2>Gift Bag Calculator</h2>
        <p className="description">Enter all measurements in inches as decimal numbers. Ex: 4.5</p>
        <p className="inputTitle">Enter bag height (top to bottom):</p>
        <input
          value={this.props.height}
          onChange={(event) => this.props.updateValues(event, 'height')}
          />
        <p className="inputTitle">Enter bag width (left to right)</p>
        <input
          value={this.props.width}
          onChange={(event) => this.props.updateValues(event, 'width')}
          />
        <p className="inputTitle">Enter bag depth (front to back)</p>
        <input
          value={this.props.depth}
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
        <p className="error">{this.props.errorMessage}</p>
        {this.props.instructions}
      </div>
  );
};

export default Calculator;

// Simple rendering
// const Calculator = (props) => (
//   <p>Calculator</p>
// );
//
// export default Calculator;
