import React, { Component } from 'react';
import './Bag.css';


class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      depth: ''
    }
    let paper_height;
    let paper_width;
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

  calculate = () => {

  }

  render() {
    this.props.title("Gift Bag");
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
          onClick={this.calculate}
          className="button">
          Calculate
        </p>
      </div>
    );
  }
}

export default Bag;
