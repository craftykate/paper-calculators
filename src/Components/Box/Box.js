import React from 'react';
import Calculator from '../Calculator/Calculator';
import box1 from './img/box1.jpg';
import box2 from './img/box2.jpg';
import box3 from './img/box3.jpg';


const Box = (props) => {

  props.title("Box");

  let inputs = [
    ["width", "Enter box width (left to right)"],
    ["depth", "Enter box depth (front to back)"],
    ["height", "Enter box height (bottom to top)"]
  ]

  let instructions = (
    <div>
      <ol>
        <li>Cut paper <strong>{props.state.variables.paperSize}{'"'} square</strong></li>
        <li>
          Pick any side to be side 1. The opposite side is side 3. The other sides are sides 2 and 4
          <p><img src={box1} alt="" /></p>
        </li>
        <li>
          On sides 1 and 3, punch and score at: <strong>{props.state.variables.firstPunch}{'"'} and {props.state.variables.secondPunch}{'"'}</strong>
        <span className="moreInfo">If your paper goes off the edge of your ruler for your second measurement, flip the paper over and repeat the first measurement </span>
          <p><img src={box2} alt="" /></p>
        </li>
        <li>On sides 2 and 4, punch and score at: <strong>{props.state.variables.thirdPunch}{'"'} and {props.state.variables.fourthPunch}{'"'}</strong></li>
        <li>Round corners</li>
        <li>Follow directions on paper punch for folding. Going rogue like this you'll have to manually make the folds marked with a dashed line:
          <p><img src={box3} alt="" /></p>
        </li>
        <li>Optional: cut bottom liner 1/8{`"`} smaller than <strong>{props.state.variables.width}{'"'} wide x {props.state.variables.depth}{'"'} tall</strong> and glue to bottom</li>
      </ol>
    </div>
  )

  return (
    <Calculator
      name="Box Calculator"
      state={props.state}
      inputs={inputs}
      calculatorType='box'
      updateValues={props.updateValues}
      checkInputs={props.checkInputs}
      reset={props.reset}
      instructions={instructions}
    />
  );
}

export default Box;
