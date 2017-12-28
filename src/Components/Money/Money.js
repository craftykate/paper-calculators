import React from 'react';
import './Money.css';
import money from './img/money.jpg';
import money1 from './img/money1.jpg';
import money2 from './img/money2.jpg';
import money3 from './img/money3.jpg';
import money4 from './img/money4.jpg';
import money5 from './img/money5.jpg';


const Money = (props) => (
  <div className="moreStuff">
    <h2>Money Envelope</h2>
    <img src={money} className="mainImage" alt="" />
    <div className="description">
      <p>This one isn't a calculator because they're all the same size, but I won't tell if you don't.</p>
      <p>These are great if you're giving cash as a gift and want to dress it up a bit, or if you use cash envelopes for budgeting or saving. Plus they're just cute!</p>
    </div>
    <div className="instructions">
      <h3>Instructions:</h3>
      <ol>
        <li>Cut paper <strong>7.5{'"'} wide x 8{'"'} tall</strong>
          <p><img src={money1} alt="" /></p>
        </li>
        <li>On wrong side, make creases at <strong>2.5{'"'} and 5.5{'"'}</strong>
          <p><img src={money2} alt="" /></p>
        </li>
        <li>Cut sides 2.5{'"'} down and 1/2{'"'} in on all four corners. Crease remaining side flap in
          <p><img src={money3} alt="" /></p>
        </li>
        <li>Round top corners and tops of side flaps</li>
        <li>Punch hole in middle of bottom flap - line up one edge to 3.25{'"'} </li>
        <li>Trim bottom and flaps in a little bit (see red lines)
          <p><img src={money4} alt="" /></p>
        </li>
        <li>Glue bottom to side flaps
          <p><img src={money5} alt="" /></p>
        </li>
      </ol>
    </div>
  </div>
);

export default Money;
