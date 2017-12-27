import React from 'react';
import bag1 from '../Components/Bag/img/bag1.jpg';
import bag2 from '../Components/Bag/img/bag2.jpg';
import bag3 from '../Components/Bag/img/bag3.jpg';
import bag4 from '../Components/Bag/img/bag4.jpg';
import bag5 from '../Components/Bag/img/bag5.jpg';
import bag6 from '../Components/Bag/img/bag6.jpg';
import bag7 from '../Components/Bag/img/bag7.jpg';
import bag8 from '../Components/Bag/img/bag8.jpg';
import bag9 from '../Components/Bag/img/bag9.jpg';
import bag10 from '../Components/Bag/img/bag10.jpg';
import bag11 from '../Components/Bag/img/bag11.jpg';
import env1 from '../Components/Envelope/img/env1.jpg';
import env2 from '../Components/Envelope/img/env2.jpg';
import env3 from '../Components/Envelope/img/env3.jpg';
import box1 from '../Components/Box/img/box1.jpg';
import box2 from '../Components/Box/img/box2.jpg';
import box3 from '../Components/Box/img/box3.jpg';


export const calculations = {

  calculateBag(h, w, d) {
    const height = Number(h);
    const width = Number(w);
    const depth = Number(d);

    let paperHeight = (1 + height + (depth / 2) + 0.25);
    let paperWidth = (0.5 + (depth * 2) + (width * 2));
    const twoPapers = (((paperWidth - 0.5) / 2) + 0.5);
    const bottomUp = (depth + 0.25);
    const sidesIn = (depth / 2);

    return (
      <ol>
        <li>
          Cut paper <strong>{this.fractionized(paperWidth)}{'"'} wide x {this.fractionized(paperHeight)}{'"'} tall</strong>
          <span className="moreInfo">(If your paper isnt wide enough you can use two pieces of paper one on top of the other. In that case, each paper would need to be <strong>{this.fractionized(twoPapers)}{'"'} wide</strong> - height is the same)</span>
          <p><img src={bag1} alt="" /></p>
        </li>
        <li>Fold either left or right side in 1/2{'"'}, fold opposite side in to meet the crease so it tucks under flap snugly. (If using two pieces of paper, fold left side of one paper and right side of the other paper in 1/2{'"'}). Unfold all folds
          <p><img src={bag2} alt="" /></p>
        <p><img src={bag3} alt="" /></p>
        </li>
        <li>Fold top down 1{'"'} then unfold
          <p><img src={bag4} alt="" /></p>
        </li>
        <li>Carefully apply glue to inside of flap(s), fold top down again (being careful to leave open on glue end) and tuck other side into flap and press down, making sure paper fits snugly up against crease
          <p><img src={bag5} alt="" /></p>
        </li>
        <li>Fold bottom up  <strong>{this.fractionized(bottomUp)}{'"'}</strong>
          <p><img src={bag6} alt="" /></p>
        </li>
        <li>Pinch sides of bottom together so side creases are in line with bottom crease
          <p><img src={bag7} alt="" /></p>
        </li>
        <li>Fold bottom and top edges towards middle crease, overlapping middle crease by 1/4{'"'}. Glue overlap
          <p><img src={bag8} alt="" /></p>
        </li>
        <li>Fold sides in <strong>{this.fractionized(sidesIn)}{'"'}</strong>
          <p><img src={bag9} alt="" /></p>
      </li>
        <li>Decorate bag if desired before unfolding</li>
        <li>Open up bag and crease folds in the proper directions
          <p><img src={bag10} alt="" /></p>
        </li>
        <li>Optional: fold top down 1{'"'} and punch holes through layers, threading ribbon through holes to secure shut
          <p><img src={bag11} alt="" /></p>
        </li>
      </ol>
    )
  },

  calculateEnvelope(h, w) {
    const height = Number(h);
    const width = Number(w);

    const firstPunch = (Math.sqrt(((height + 1)**2)/2) - 0.35);
    const secondPunch = (Math.sqrt(((width + 1)**2)/2) - 0.35);
    const paperSize = (firstPunch + secondPunch);

    return (
      <div>
        <ol>
          <li>Cut paper <strong>{this.fractionized(paperSize)}{'"'} square</strong></li>
          <li>
            Pick any side to be side 1. The opposite side is side 3. The other sides are sides 2 and 4
            <p><img src={env1} alt="" /></p>
          </li>
          <li>On sides 1 and 3, punch and score at: <strong>{this.fractionized(firstPunch)}{'"'}</strong>
            <p><img src={env2} alt="" /></p>
          </li>
          <li>On sides 2 and 4, punch and score at: <strong>{this.fractionized(secondPunch)}{'"'}</strong></li>
          <li>Round corners</li>
          <li>Fold your sides and bottom in however you like. Glue overlaps to secure
            <p><img src={env3} alt="" /></p>
          </li>
        </ol>
      </div>
    )
  },

  calculateBox(h, w, d) {
    const height = Number(h);
    const width = Number(w);
    const depth = Number(d);

    const firstPunch = Math.sqrt(((width + 1)**2)/2) - 0.35;
    const secondPunch = Math.sqrt(((width + height + height + 1)**2)/2) - 0.35;
    const thirdPunch = Math.sqrt(((depth + 1)**2)/2) - 0.35;
    const fourthPunch = Math.sqrt(((depth + height + height + 1)**2)/2) - 0.35;
    const paperSize = secondPunch + thirdPunch;

    return (
      <div>
        <ol>
          <li>Cut paper <strong>{this.fractionized(paperSize)}{'"'} square</strong></li>
          <li>
            Pick any side to be side 1. The opposite side is side 3. The other sides are sides 2 and 4
            <p><img src={box1} alt="" /></p>
          </li>
          <li>
            On sides 1 and 3, punch and score at: <strong>{this.fractionized(firstPunch)}{'"'} and {this.fractionized(secondPunch)}{'"'}</strong>
          <span className="moreInfo">If your paper goes off the edge of your ruler for your second measurement, flip the paper over and repeat the first measurement </span>
            <p><img src={box2} alt="" /></p>
          </li>
          <li>On sides 2 and 4, punch and score at: <strong>{this.fractionized(thirdPunch)}{'"'} and {this.fractionized(fourthPunch)}{'"'}</strong></li>
          <li>Round corners</li>
          <li>Follow directions on paper punch for folding. Going rogue like this you'll have to manually make the folds marked with a dashed line:
            <p><img src={box3} alt="" /></p>
          </li>
          <li>Optional: cut bottom liner 1/8{`"`} smaller than <strong>{this.fractionized(width)}{'"'} wide x {this.fractionized(depth)}{'"'} tall</strong> and glue to bottom</li>
        </ol>
      </div>
    )
  },

  // returns the whole number as a fraction
  fractionized(number) {
    // turn the decimal part into a fraction
    const fraction = this.returnFraction(number);
    // isolate the number before the decimal
    number = number - (number % 1);
    // if fraction is equal to 1, the fraction is almost 1, so add 1 to number and return it
    if (fraction === 1) {
      return number + 1;
    // if fraction is equal to 0, just return number, no fraction added
    } else if (fraction === "0") {
      return number;
    // otherwise return the number with the fraction
    } else {
      return `${number} ${fraction}`;
    }
  },

  // returns the decimal part of the number as a fraction
  returnFraction(number) {
    const sixteenths = [0, 0.0625, 0.125, 0.1875, 0.25, 0.3125, 0.375, 0.4375, 0.5, 0.5625, 0.625, 0.6875, 0.75, 0.8125, 0.875, 0.9375];
    const fractions = ["0", "1/16", "1/8", "3/16", "1/4", "5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "11/16", "3/4", "13/16", "7/8", "15/16"];
    // set up comparison variable
  	let lastMargin = 1
    // variable to store closest fraction
    let result = 1;
    // isolate the decimal
    const remainder = number % 1;
    // loop through 16ths
    for (let index = 0; index < sixteenths.length; index++) {
      // find difference between decimal and current 16th
      let margin = Math.abs(remainder - sixteenths[index]);
      // if difference is the same...
      if (margin === 0) {
        // store corresponding fraction and break
        result = fractions[index];
        break;
      // if difference was smaller last time you're going in the wrong direction so store the last number and break
      } else if (lastMargin <= margin) {
        result = fractions[index - 1];
        break;
      // you haven't found your number yet so set lastMargin to this one and move on
      } else {
        lastMargin = margin;
      }
    }
    return result;
  }
}
