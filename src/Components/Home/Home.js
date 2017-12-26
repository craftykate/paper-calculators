import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends Component {

  render() {
    this.props.title("");
    return (
      <div id="content" className="home">
        <h2>Quick Links</h2>
        <ul className="navButtons">
          <li><Link to="/bag">Gift Bag</Link></li>
          <li><Link to="/envelope">Envelope</Link></li>
          <li><Link to="/box">Box</Link></li>
        </ul>
        <h2>Background</h2>
        <p>I have love making things out of paper. I have one of those <a href="http://www.wermemorykeepers.com/default.aspx?PageID=956&CategoryID=804&ProductID=15548&ItemID=17208&RootCatCode=08000">punch boards</a> that makes folding envelopes and boxes a breeze - except no one seems to have proper directions for folding things to exact dimensions. Either you input how big your card is and it tells you how to fold your envelope - with some mysterious extra amount built in to make it big enough to hold your card - or the calculations are just plain wrong. So you'd wind up with something sort of like what you wanted, or close enough to what you were looking for.</p>
        <p>"Sort of" and "close enough" are not good enough for me. So I reverse engineered some items, took measurements, built <i>proper</i> formulas, built some programs to do the calculations for me and then put them online for everyone to enjoy.</p>
      </div>
    );
  }
}

export default Home;
