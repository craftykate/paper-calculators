import React from 'react';

export const calculations = {

  calculateBag(h, w, d) {
    const height = Number(h);
    const width = Number(w);
    const depth = Number(d);

    let paperHeight = (1 + height + (depth / 2) + 0.25);
    let paperWidth = (0.5 + (depth * 2) + (width * 2));
    const twoPapers = (((paperWidth - 0.5) / 2) + 0.5).toFixed(2);
    const bottomUp = (depth + 0.25).toFixed(2);
    const sidesIn = (depth / 2).toFixed(2);
    paperHeight = paperHeight.toFixed(2);
    paperWidth = paperWidth.toFixed(2);

    return (
      <ol>
        <li>
          Cut paper <strong>{paperHeight}{'"'} tall x {paperWidth}{'"'} wide</strong>.
          <span className="moreInfo">If your paper isnt wide enough you can use two pieces of paper one on top of the other. In that case, each paper would need to be <strong>{twoPapers+`\u0022`} wide</strong> (height is the same).</span>
        </li>,
        <li>Fold either left or right side in 1/2{'"'}, fold opposite side in to meet the crease so it tucks under flap snugly. (If using two pieces of paper, fold left side of one paper and right side of the other paper in 1/2{`\u0022`}.) Unfold all folds.</li>
        <li>Fold top down 1{'"'} then unfold.</li>
        <li>Carefully apply glue to inside of flap(s), fold top down again (being careful to leave open on glue end) and tuck other side into flap and press down, making sure paper fits snugly up against crease.</li>
        <li>Fold bottom up {bottomUp}{'"'}.</li>
        <li>Pinch sides of bottom together so side creases are in line with bottom crease.</li>
        <li>Fold bottom and top edges towards middle crease, overlapping middle crease by 1/4{'"'}. Glue overlap.</li>
        <li>Fold sides in {sidesIn}{'"'}</li>
        <li>Decorate bag if desired before unfolding</li>
        <li>Open up bag and crease folds in the proper directions.</li>
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
        <p><i>(These instructions might not make much sense until I get some diagrams up.)</i></p>
        <ol>
          <li>Cut paper <strong>{paperSize.toFixed(2)}{'"'} square.</strong></li>
          <li>Pick any side to be side 1. The opposite side is side 3. The other sides are sides 2 and 4.</li>
          <li>Punch measurements on sides 1 and 3: <strong>{firstPunch.toFixed(2)}</strong></li>
          <li>Punch measurements on side 2 and 4: <strong>{secondPunch.toFixed(2)}</strong></li>
        </ol>
      </div>
    )
  },

  calculateBox(h, w, d) {
    const height = Number(h);
    const width = Number(w);
    const depth = Number(d);

    // calculate paper size and where the punches are
    const firstPunch = Math.sqrt(((width + 1)**2)/2) - 0.35
    const secondPunch = Math.sqrt(((width + height + height + 1)**2)/2) - 0.35
    const thirdPunch = Math.sqrt(((depth + 1)**2)/2) - 0.35
    const fourthPunch = Math.sqrt(((depth + height + height + 1)**2)/2) - 0.35
    const paperSize = secondPunch + thirdPunch

    return (
      <div>
        <p><i>(These instructions might not make much sense until I get some diagrams up.)</i></p>
        <ol>
          <li>Cut paper {paperSize.toFixed(2)} square</li>
          <li>Pick any side to be side 1. The opposite side is side 3. The other sides are sides 2 and 4.</li>
          <li>Punch measurements on sides 1 and 3: <strong>{firstPunch.toFixed(2)} and {secondPunch.toFixed(2)}</strong></li>
          <li>Punch measurements on side 2 and 4: <strong>{thirdPunch.toFixed(2)} and {fourthPunch.toFixed(2)}</strong></li>
          <li>Cut bottom liner 1/4{`"`} or 1/8{`"`} smaller than {width.toFixed(2)} by {depth.toFixed(2)}</li>
        </ol>
      </div>
    )
  }
}
