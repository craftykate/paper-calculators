import React from 'react';
import './Calculator.css';

const Calculator = (props) => {

  let instructions = null;
  if (props.state.showInstructions) {
    instructions = (
      <div className="instructions">
        <h3 className="instructions">Instructions:</h3>
        {props.state.directions}
      </div>
    );
  }

  let errorMessage = " ";
  if (props.state.errorMessage) {
    errorMessage = props.state.errorMessage
  }

  return (
    <div className="calculator">
      <h2>{props.name}</h2>
      <p className="description">Enter all measurements in inches as decimal numbers. Ex: 4.5</p>
      {props.inputs.map((input, i) => {
        return (
          <div key={i}>
            <p className="inputTitle">{input[1]}:</p>
            <input
              value={props.state[input[0]]}
              onChange={(event) => props.updateValues(event, input[0])}
              />
          </div>
        )
      })}
      <p
        onClick={() => props.checkInputs(props.calculatorType)}
        className="button">
        Calculate
      </p>
      <a
        onClick={props.reset}
        className="clear">clear
      </a>
      <p className="error">{errorMessage}</p>
      {instructions}
    </div>
  )
};

export default Calculator;
