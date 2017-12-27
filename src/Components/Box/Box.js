import React from 'react';
import Calculator from '../Calculator/Calculator';


const Box = (props) => {

  props.title("Box");

  let inputs = [
    ["width", "Enter box width (left to right)"],
    ["depth", "Enter box depth (front to back)"],
    ["height", "Enter box height (bottom to top)"]
  ]

  return (
    <Calculator
      name="Box Calculator"
      state={props.state}
      inputs={inputs}
      calculatorType='box'
      updateValues={props.updateValues}
      checkInputs={props.checkInputs}
      reset={props.reset}
    />
  );
}

export default Box;
