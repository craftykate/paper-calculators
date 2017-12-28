import React from 'react';
import Calculator from '../Calculator/Calculator';
import bag1 from './img/bag1.jpg';
import bag2 from './img/bag2.jpg';
import bag3 from './img/bag3.jpg';
import bag4 from './img/bag4.jpg';
import bag5 from './img/bag5.jpg';
import bag6 from './img/bag6.jpg';
import bag7 from './img/bag7.jpg';
import bag8 from './img/bag8.jpg';
import bag9 from './img/bag9.jpg';
import bag10 from './img/bag10.jpg';
import bag11 from './img/bag11.jpg';


const Bag = (props) => {

  props.title("Gift Bag");

  let inputs = [
    ["width", "Enter bag width (left to right)"],
    ["depth", "Enter bag depth (front to back)"],
    ["height", "Enter bag height (top to bottom)"]
  ]

  let instructions = (
    <ol>
      <li>
        Cut paper <strong>{props.state.variables.paperWidth}{'"'} wide x {props.state.variables.paperHeight}{'"'} tall</strong>
      <span className="moreInfo">(If your paper isnt wide enough you can use two pieces of paper one on top of the other. In that case, each paper would need to be <strong>{props.state.variables.twoPapers}{'"'} wide</strong> - height is the same)</span>
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
      <li>Fold bottom up  <strong>{props.state.variables.bottomUp}{'"'}</strong>
        <p><img src={bag6} alt="" /></p>
      </li>
      <li>Pinch sides of bottom together so side creases are in line with bottom crease
        <p><img src={bag7} alt="" /></p>
      </li>
      <li>Fold bottom and top edges towards middle crease, overlapping middle crease by 1/4{'"'}. Glue overlap
        <p><img src={bag8} alt="" /></p>
      </li>
      <li>Fold sides in <strong>{props.state.variables.sidesIn}{'"'}</strong>
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

  return (
    <Calculator
      name="Gift Bag Calculator"
      state={props.state}
      inputs={inputs}
      calculatorType='bag'
      updateValues={props.updateValues}
      checkInputs={props.checkInputs}
      reset={props.reset}
      instructions={instructions}
    />
  );
}

export default Bag;
