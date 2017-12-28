import React from 'react';
import Calculator from '../Calculator/Calculator';
import env1 from './img/env1.jpg';
import env2 from './img/env2.jpg';
import env3 from './img/env3.jpg';


const Envelope = (props) => {

  props.title("Envelope");

  let inputs = [
    ["width", "Enter envelope width (left to right)"],
    ["height", "Enter envelope height (top to bottom)"]
  ]

  let instructions = (
    <div>
      <ol>
        <li>Cut paper <strong>{props.state.variables.paperSize}{'"'} square</strong></li>
        <li>
          Pick any side to be side 1. The opposite side is side 3. The other sides are sides 2 and 4
          <p><img src={env1} alt="" /></p>
        </li>
        <li>On sides 1 and 3, punch and score at: <strong>{props.state.variables.firstPunch}{'"'}</strong>
          <p><img src={env2} alt="" /></p>
        </li>
        <li>On sides 2 and 4, punch and score at: <strong>{props.state.variables.secondPunch}{'"'}</strong></li>
        <li>Round corners</li>
        <li>Fold your sides and bottom in however you like. Glue overlaps to secure
          <p><img src={env3} alt="" /></p>
        </li>
      </ol>
    </div>
  )

  return (
    <Calculator
      name="Envelope Calculator"
      state={props.state}
      inputs={inputs}
      calculatorType='envelope'
      updateValues={props.updateValues}
      checkInputs={props.checkInputs}
      reset={props.reset}
      instructions={instructions}
    />
  );
}

export default Envelope;
