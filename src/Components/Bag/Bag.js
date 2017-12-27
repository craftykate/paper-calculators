import React from 'react';
import Calculator from '../Calculator/Calculator';


const Bag = (props) => {

  props.title("Gift Bag");

  let inputs = [
    ["width", "Enter bag width (left to right)"],
    ["depth", "Enter bag depth (front to back)"],
    ["height", "Enter bag height (top to bottom)"]
  ]

  return (
    <Calculator
      name="Gift Bag Calculator"
      state={props.state}
      inputs={inputs}
      calculatorType='bag'
      updateValues={props.updateValues}
      checkInputs={props.checkInputs}
      reset={props.reset}
    />
  );
}

export default Bag;
