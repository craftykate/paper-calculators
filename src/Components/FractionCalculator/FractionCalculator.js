import React from 'react';
import './FractionCalculator.css';


const FractionCalculator = (props) => {
  let result = [null, null, null];
  if (props.state.showInstructions) {
    result = [...props.state.variables];
  }

  return (
    <div className="moreStuff">
      <h2>
        Fraction Calculator
      </h2>
      <div className="description">
        <p>
          I built a calculator for the instructions in this app that converts decimals to the nearest 1/16th inch (because it's so much easier for me to find 5/16ths on a ruler than 0.34) and then figured I might as well turn it into a standalone feature.
        </p>
        <p>Enter a decimal number below to calculate it to the nearest, 1/16{'"'}, 1/8{'"'} and 1/4{'"'}</p>
        <table>
          <thead>
            <tr>
              <th scope="col">Decimal</th>
              <th scope="col">Sixteenths</th>
              <th scope="col">Eighths</th>
              <th scope="col">Quarters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="number"
                  value={props.state.decimal}
                  onChange={(event) => props.updateValues(event, 'decimal')}
                  style={{width: '50px', fontSize: '100%'}}
                  />
              </td>
              <td>{result[0]}</td>
              <td>{result[1]}</td>
              <td>{result[2]}</td>
            </tr>
          </tbody>
        </table>
        <p
          onClick={props.runFractions}
          className="button"
          style={{marginTop: '0'}}>
            Calculate
        </p>
      </div>
    </div>
  )
};

export default FractionCalculator;
