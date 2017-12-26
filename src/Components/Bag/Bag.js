import React, { Component } from 'react';
import './Bag.css';


class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '5',
      width: '4',
      depth: '2',
      showBagInstruction: false,
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

  calculateBag = () => {
    const height = Number(this.state.height);
    const width = Number(this.state.width);
    const depth = Number(this.state.depth);

    const paperHeight = (1 + height + (depth / 2) + 0.25);
    const paperWidth = (0.5 + (depth * 2) + (width * 2));
    const twoPapers = (((paperWidth - 0.5) / 2) + 0.5);
    const bottomUp = (depth + 0.25);
    const sidesIn = (depth / 2);

    const directions = (
      <div className="instructions">
        <h3 className="instructions">Instructions:</h3>
        <ol>
          <li>
            Cut paper <strong>{paperHeight}" tall x {paperWidth}" wide</strong>.
            <span className="moreInfo">If your paper isnt wide enough you can use two pieces of paper one on top of the other. In that case, each paper would need to be <strong>{twoPapers+`\u0022`} wide</strong> (height is the same).</span>
          </li>
          <li>Fold either left or right side in 1/2", fold opposite side in to meet the crease so it tucks under flap snugly. (If using two pieces of paper, fold left side of one paper and right side of the other paper in 1/2{`\u0022`}.) Unfold all folds.</li>
          <li>Fold top down 1" then unfold.</li>
          <li>Carefully apply glue to inside of flap(s), fold top down again (being careful to leave open on glue end) and tuck other side into flap and press down, making sure paper fits snugly up against crease.</li>
          <li>Fold bottom up {bottomUp}".</li>
          <li>Pinch sides of bottom together so side creases are in line with bottom crease.</li>
          <li>Fold bottom and top edges towards middle crease, overlapping middle crease by 1/4". Glue overlap.</li>
          <li>Fold sides in {sidesIn}"</li>
          <li>Decorate bag if desired before unfolding</li>
          <li>Open up bag and crease folds in the proper directions.</li>
        </ol>
      </div>
    )

    this.setState({
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
          onClick={this.calculateBag}
          className="button">
          Calculate
        </p>
        {instructions}
      </div>
    );
  }
}

export default Bag;
