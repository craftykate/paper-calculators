import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = (props) => (

  <header>
    <h1>Kate's Paper Calculators</h1>
    <ul>
      <li><NavLink exact to="/" onClick={props.reset}>Home</NavLink></li>
      <li><NavLink to="/bag" onClick={props.reset}>Gift Bag</NavLink></li>
      <li><NavLink to="/envelope" onClick={props.reset}>Envelope</NavLink></li>
      <li><NavLink to="/box" onClick={props.reset}>Box</NavLink></li>
      <li><NavLink to="/more" onClick={props.reset}>More</NavLink></li>
    </ul>
  </header>
);

export default Header;
