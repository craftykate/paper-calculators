import React, { Component } from 'react';
import './FractionCalculator.css';


class FractionCalculator extends Component {
  state = {
    fraction: '',
    undoneFraction: 'equals: ',
    errorMessage: ''
  }

  updateFraction = (event) => {
    this.setState({
      fraction: event.target.value,
      errorMessage: ''
    })
  }

  undoFraction = () => {
    // entry must include a divided by sign
    if (this.state.fraction.includes("/")) {
      let wholeNumber;
      let fraction;
      // if entry includes a whole number, split it to find number and fraction
      if (this.state.fraction.includes(" ")) {
        const number = this.state.fraction.split(" ");
        wholeNumber = number[0];
        fraction = number[1];
      // entry just includes a fraction, so set whole number to 0 and set fraction to the whole thing
      } else {
        wholeNumber = 0;
        fraction = this.state.fraction;
      }
      const fractionArray = fraction.split("/")
      const numerator = fractionArray[0];
      const denominator = fractionArray[1];
      const decimal = (numerator / denominator);
      const entireNumber = (Number(wholeNumber) + decimal).toFixed(2);
      if (!isNaN(entireNumber)) {
        this.setState({
          undoneFraction: `equals: ${entireNumber}`
        })
      } else {
        this.setState({
          errorMessage: 'Sorry, I don\'t understand that',
          fraction: '',
          undoneFraction: ''
        })
      }
    } else {
      this.setState({
        errorMessage: 'Oops, enter a fraction like this: 4 5/6',
        undoneFraction: ''
      })
    }
  }

  render() {
    let result = [null, null, null];
    if (this.props.state.showInstructions) {
      result = [...this.props.state.variables];
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
                    value={this.props.state.decimal}
                    onChange={(event) => this.props.updateValues(event, 'decimal')}
                    style={{width: '80px', fontSize: '100%'}}
                    />
                </td>
                <td>{result[0]}</td>
                <td>{result[1]}</td>
                <td>{result[2]}</td>
              </tr>
            </tbody>
          </table>
          <p
            onClick={this.props.runFractions}
            className="button"
            style={{margin: '0 0 20px 0'}}>
            Calculate
          </p>
          <p>And because my sister wants a calculator that goes the other way, enter your fraction below (like 4 3/16 with a space between whole number and fraction - or just a fraction, like 7/16) and click calculate.</p>
          <input
            value={this.state.fraction}
            onChange={this.updateFraction}
            style={{width: '100px', fontSize: '100%', display: 'inline'}}
          />
        <p className="error" style={{display: 'inline', marginLeft: '10px'}}>
            {this.state.errorMessage}
          </p>
          <p style={{display: 'inline', marginLeft: '10px'}}>
            {this.state.undoneFraction}
          </p>
          <p><a onClick={this.undoFraction}>
            Calculate
          </a></p>
        </div>
      </div>
    )
  }
};

export default FractionCalculator;
