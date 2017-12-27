import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = (props) => (

  <header>
    <h1>Kate's Paper Calculators</h1>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/bag">Gift Bag</NavLink></li>
      <li><NavLink to="/envelope">Envelope</NavLink></li>
    </ul>
  </header>
);

export default Header;
