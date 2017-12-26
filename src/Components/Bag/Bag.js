import React, { Component } from 'react';
import './Bag.css';


class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      depth: '',
      showBagInstruction: false,
      errorMessage: null,
      bagDirections: ''
    }
  }

  // componentDidUpdate() {
  // }

  updateValues = (event, field) => {
    if (!isNaN(event.target.value)) {
      this.setState({
        [field]: event.target.value
      })
    }
  }

  reset = () => {
    this.setState({
      height: '',
      width: '',
      depth: '',
      errorMessage: null
    })
  }

  checkInputs = () => {
    if (this.state.height && this.state.width && this.state.depth) {
      this.calculateBag();
    } else {
      this.setState({
        errorMessage: "You must enter numbers for each dimension",
        showBagInstruction: false
      })
    }
  }

  calculateBag = () => {
    const height = Number(this.state.height);
    const width = Number(this.state.width);
    const depth = Number(this.state.depth);

    let paperHeight = (1 + height + (depth / 2) + 0.25);
    let paperWidth = (0.5 + (depth * 2) + (width * 2));
    const twoPapers = (((paperWidth - 0.5) / 2) + 0.5).toFixed(2);
    const bottomUp = (depth + 0.25).toFixed(2);
    const sidesIn = (depth / 2).toFixed(2);
    paperHeight = paperHeight.toFixed(2);
    paperWidth = paperWidth.toFixed(2);

    const directions = (
      <div className="instructions">
        <h3 className="instructions">Instructions:</h3>
        <ol>
          <li>
            Cut paper <strong>{paperHeight}" tall x {paperWidth}" wide</strong>.
            <span className="moreInfo">If your paper isnt wide enough you can use two pieces of paper one on top of the other. In that case, each paper would need to be <strong>{twoPapers+`\u0022`} wide</strong> (height is the same).</span>
          </li>
          <li>Fold either left or right side in 1/2{'"'}, fold opposite side in to meet the crease so it tucks under flap snugly. (If using two pieces of paper, fold left side of one paper and right side of the other paper in 1/2{`\u0022`}.) Unfold all folds.</li>
          <li>Fold top down 1{'"'} then unfold.</li>
          <li>Carefully apply glue to inside of flap(s), fold top down again (being careful to leave open on glue end) and tuck other side into flap and press down, making sure paper fits snugly up against crease.</li>
          <li>Fold bottom up {bottomUp}{'"'}.</li>
          <li>Pinch sides of bottom together so side creases are in line with bottom crease.</li>
          <li>Fold bottom and top edges towards middle crease, overlapping middle crease by 1/4{'"'}. Glue overlap.</li>
          <li>Fold sides in {sidesIn}{'"'}</li>
          <li>Decorate bag if desired before unfolding</li>
          <li>Open up bag and crease folds in the proper directions.</li>
        </ol>
      </div>
    )

    this.setState({
      errorMessage: null,
      showBagInstruction: true,
      bagDirections: directions
    })
  }

  render() {
    this.props.title("Gift Bag");
    let instructions = null;
    if (this.state.showBagInstruction) {
      instructions = this.state.bagDirections;
    }
    let errorMessage = " ";
    if (this.state.errorMessage) {
      errorMessage = this.state.errorMessage
    }
    return (
      <div className="calculator">
        <h2>Gift Bag Calculator</h2>
        <p className="description">Enter all measurements in inches as decimal numbers. Ex: 4.5</p>
        <p className="inputTitle">Enter bag height (top to bottom):</p>
        <input
          value={this.state.height}
          onChange={(event) => this.updateValues(event, 'height')}
          />
        <p className="inputTitle">Enter bag width (left to right)</p>
        <input
          value={this.state.width}
          onChange={(event) => this.updateValues(event, 'width')}
          />
        <p className="inputTitle">Enter bag depth (front to back)</p>
        <input
          value={this.state.depth}
          onChange={(event) => this.updateValues(event, 'depth')}
          />
        <p
          onClick={this.checkInputs}
          className="button">
          Calculate
        </p>
        <a
          onClick={this.reset}
          className="clear">clear
        </a>
        <p className="error">{errorMessage}</p>
        {instructions}
      </div>
    );
  }
}

export default Bag;
