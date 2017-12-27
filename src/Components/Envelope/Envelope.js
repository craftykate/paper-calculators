import React from 'react';
import Calculator from '../Calculator/Calculator';


const Envelope = (props) => {

  props.title("Envelope");

  let inputs = [
    ["height", "Enter envelope height (top to bottom)"],
    ["width", "Enter envelope width (left to right)"]
  ]

  return (
    <div>
      <h2>In progress!</h2>
      <p>Building this now, check back soon!</p>
    </div>
    /*<Calculator
      name="Envelope Calculator"
      state={props.state}
      inputs={inputs}
      calculatorType='envelope'
      updateValues={props.updateValues}
      checkInputs={props.checkInputs}
      reset={props.reset}
    />*/
  );
}

export default Envelope;
