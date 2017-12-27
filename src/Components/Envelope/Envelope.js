import React from 'react';
import Calculator from '../Calculator/Calculator';


const Envelope = (props) => {

  props.title("Envelope");

  let inputs = [
    ["height", "Enter envelope height (top to bottom)"],
    ["width", "Enter envelope width (left to right)"]
  ]

  return (
    <Calculator
      name="Envelope Calculator"
      state={props.state}
      inputs={inputs}
      calculatorType='envelope'
      updateValues={props.updateValues}
      checkInputs={props.checkInputs}
      reset={props.reset}
    />
  );
}

export default Envelope;
