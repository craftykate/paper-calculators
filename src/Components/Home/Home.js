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
      </div>
    );
  }
}

export default Home;
