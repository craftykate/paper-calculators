import React, { Component } from 'react';
import './Bag.css';


class Bag extends Component {

  render() {
    this.props.title("Gift Bag");
    return (
      <p>Bag</p>
    );
  }
}

export default Bag;
