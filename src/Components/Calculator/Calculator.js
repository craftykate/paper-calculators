import React from 'react';
import bag from '../Bag/img/bag11.jpg';
import env from '../Envelope/img/env4.jpg';
import box from '../Box/img/box4.jpg';


const Calculator = (props) => {

  let instructions = null;
  if (props.state.showInstructions) {
    instructions = (
      <div className="instructions">
        <h3 className="instructions">Instructions:</h3>
        {props.instructions}
      </div>
    );
  }

  let errorMessage = "";
  if (props.state.errorMessage) {
    errorMessage = props.state.errorMessage
  }

  let imageTag = "";
  if (props.calculatorType === 'bag') imageTag = (<img src={bag} alt="" />) ;
  if (props.calculatorType === 'envelope') imageTag = (<img src={env} alt="" />) ;
  if (props.calculatorType === 'box') imageTag = (<img src={box} alt="" />) ;

  return (
    <div className="calculator">
      <h2>{props.name}</h2>
      {imageTag}
      <p className="description">Enter all measurements in inches as decimal numbers. Ex: 4.5</p>
      {props.inputs.map((input, i) => {
        return (
          <div key={i}>
            <p className="inputTitle">{input[1]}:</p>
            <input
              type="number"
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
