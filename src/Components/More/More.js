import React from 'react';
import './More.css';
import Money from '../Money/Money';
import FractionCalculator from '../FractionCalculator/FractionCalculator';


const More = (props) => {
  props.title("More");

  return (
    <React.Fragment>
      <FractionCalculator
        state={props.state}
        updateValues={props.updateValues}
        checkInputs={props.checkInputs}
        runFractions={props.runFractions}
        reset={props.reset}
      />
    <Money />
    </React.Fragment>
  )
};

export default More;
