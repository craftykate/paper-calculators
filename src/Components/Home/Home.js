import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import allThree from './all-three.jpg';


const Home = (props) => {

  props.title("");

  return (
    <div className="home">
      <h2>Quick Links</h2>
      <ul className="navButtons">
        <li><Link to="/bag">Gift Bag</Link></li>
        <li><Link to="/envelope">Envelope</Link></li>
        <li><Link to="/box">Box</Link></li>
      </ul>
      <div className="imageContainer">
        <img src={allThree} alt="all items" />
      </div>
      <h2>Background</h2>
      <p>I love making things out of paper. I have one of those <a href="http://www.wermemorykeepers.com/default.aspx?PageID=956&CategoryID=804&ProductID=15548&ItemID=17208&RootCatCode=08000" target="_blank" rel="noopener noreferrer">punch boards</a> that makes folding envelopes and boxes a breeze - except no one seems to have proper directions for folding things to exact dimensions. Either you input how big your card is and it tells you how to fold your envelope - with some mysterious extra amount built in to make it big enough to hold your card - or the calculations are just plain wrong. So you'd wind up with something sort of like what you wanted, or close enough to what you were looking for.</p>
      <p>"Sort of" and "close enough" are not good enough for me. So I reverse engineered some items, took measurements, built <i>proper</i> formulas, built some programs to do the calculations for me and then put them online for everyone to enjoy.</p>
      <h2>Requirements</h2>
      <p>The gift bag does not require special tools but the other items require some sort of envelope or similar <a href="http://www.wermemorykeepers.com/default.aspx?PageID=956&CategoryID=804&ProductID=15548&ItemID=17208&RootCatCode=08000" target="_blank" rel="noopener noreferrer">punch boards</a>.</p>
      <p>Some way to cut paper is required, either with a cutting mat, ruler and rotary cutter, or with a paper cutter (my <a href="http://www.michaels.com/10132125.html" target="_blank" rel="noopener noreferrer">preferred method</a>, as it makes scoring a breeze).</p>
      <p>As for paper, I use the giant <a href="http://www.michaels.com/recollections-home-basics-paper-pad/10308867.html" target="_blank" rel="noopener noreferrer">paper pads</a> from the craft store which are a little thicker than normal paper, but you could use pretty much anything you can find (grocery bags, old maps, magazine pages). </p>
      <p>Glue of some sort is needed to keep your creations together. I like glue sticks so the paper doesn't get soggy, but use whatever you have on hand.</p>
      <p>That's about it! Poke around on Pinterest to get some ideas, there are so many creative ways to fold, cut and glue paper!</p>
      <p><i>Please note this site was mostly built so I can practice programming in ReactJS. Due to some complicated things I'm practicing, there's one kink I haven't figured out yet and that's being able to refresh the page when you're on a subpage. So, don't do that for now and I'll work on figuring out how to fix it. :)</i></p>
    </div>
  );
}

export default Home;
