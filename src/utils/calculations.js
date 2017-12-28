const calculations = {

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
      {
        paperWidth: this.fractionized(paperWidth, '1/16'),
        paperHeight: this.fractionized(paperHeight, '1/16'),
        twoPapers: this.fractionized(twoPapers, '1/16'),
        bottomUp: this.fractionized(bottomUp, '1/16'),
        sidesIn: this.fractionized(sidesIn, '1/16')
      }
    )
  },

  calculateEnvelope(h, w) {
    const height = Number(h);
    const width = Number(w);

    const firstPunch = (Math.sqrt(((height + 1)**2)/2) - 0.35);
    const secondPunch = (Math.sqrt(((width + 1)**2)/2) - 0.35);
    const paperSize = (firstPunch + secondPunch);

    return (
      {
        firstPunch: this.fractionized(firstPunch, '1/16'),
        secondPunch: this.fractionized(secondPunch, '1/16'),
        paperSize: this.fractionized(paperSize, '1/16')
      }
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
      {
        firstPunch: this.fractionized(firstPunch, '1/16'),
        secondPunch: this.fractionized(secondPunch, '1/16'),
        thirdPunch: this.fractionized(thirdPunch, '1/16'),
        fourthPunch: this.fractionized(fourthPunch, '1/16'),
        paperSize: this.fractionized(paperSize, '1/16')
      }
    )
  },

  allFractions(number) {
    let fractionResults = [];
    const calculatorTypes = ['1/16', '1/8', '1/4'];
    calculatorTypes.forEach(calc => {
      fractionResults.push(this.fractionized(number, calc));
    })
    return fractionResults;
  },

  // returns the whole number as a fraction
  fractionized(number, calcType) {
    // turn the decimal part into a fraction
    const fraction = this.returnFraction(number, calcType);
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

  getFractionsArrays(calcType) {
    if (calcType === '1/16') {
      return {
        decimalsArray: [0, 0.0625, 0.125, 0.1875, 0.25, 0.3125, 0.375, 0.4375, 0.5, 0.5625, 0.625, 0.6875, 0.75, 0.8125, 0.875, 0.9375],
        fractionsArray: ["0", "1/16", "1/8", "3/16", "1/4", "5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "11/16", "3/4", "13/16", "7/8", "15/16"]
      }
    }
    if (calcType === '1/8') {
      return {
        decimalsArray: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875],
        fractionsArray: ["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"]
      }
    }
    if (calcType === '1/4') {
      return {
        decimalsArray: [0, 0.25, 0.5, 0.75],
        fractionsArray: ["0", "1/4", "1/2", "3/4"]
      }
    }
  },

  // returns the decimal part of the number as a fraction
  returnFraction(number, calcType) {
    // get proper calculating arrays
    const calculatingObject = this.getFractionsArrays(calcType);
    const decimals = calculatingObject.decimalsArray;
    const fractions = calculatingObject.fractionsArray;
    // set up comparison variable
  	let lastMargin = 1
    // variable to store closest fraction
    let result = 1;
    // isolate the decimal
    const remainder = number % 1;
    // loop through 16ths
    for (let index = 0; index < decimals.length; index++) {
      // find difference between decimal and current 16th
      let margin = Math.abs(remainder - decimals[index]);
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

export default calculations;
