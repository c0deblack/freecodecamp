/*
function convertToRoman(num) {
  function getNumeral(digit, lowStr, midStr, nextStr) {
    switch (true) {
      case digit <= 3:
        return lowStr.repeat(digit);
      case digit === 4:
        return lowStr + midStr;
      case digit <= 8: // digits 5-8
        return midStr + lowStr.repeat(digit - 5);
      default: // digit 9
        return lowStr + nextStr
    }
  }

  let str = ""

  // Thousands
  str += "M".repeat(Math.floor(num/1000));
  num %= 1000;

  // Hundreds
  str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
  num %= 100;

  // Tens
  str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
  num %= 10;

  // Ones
  str += getNumeral(num, 'I', 'V', 'X')

  return str;
}
*/

/*
function convertToRoman(num) {
  var romans = [
      // 10^i 10^i*5
      ["I", "V"], // 10^0
      ["X", "L"], // 10^1
      ["C", "D"], // 10^2
      ["M"] // 10^3
    ],
    digits = num
      .toString()
      .split("")
      .reverse()
      .map(function(item, index) {
        return parseInt(item);
      }),
    numeral = "";

  // Loop through each digit, starting with the ones place
  for (var i = 0; i < digits.length; i++) {
    // Make a Roman numeral that ignores 5-multiples and shortening rules
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    // Check for a Roman numeral 5-multiple version
    if (romans[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(
          romans[i][1] + romans[i][0].repeat(4),
          romans[i][0] + romans[i + 1][0]
        )
        // Shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }

  return numeral;
}
*/

/*
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};
*/

/*
function convertToRoman(num) {
  // adapted from http://rapidtables.com/convert/number/how-number-to-roman-numerals.htm
  
  var map = [
    { d:1, r:'I' },
    { d:4, r:'IV' },
    { d:5, r:'V' },
    { d:9, r:'IX' },
    { d:10, r:'X' },
    { d:40, r:'XL' },
    { d:50, r:'L' },
    { d:90, r:'XC' },
    { d:100, r:'C' },
    { d:400, r:'CD' },
    { d:500, r:'D' },
    { d:900, r:'CM' },
    { d:1000, r:'M' }
  ];
  
  var roman = '';
  
  while (num > 0) {

    // highest mapped decimal less than or equal num
    var max = map[0];
    map.forEach(function(el) {
      if (el.d <= num) {
        max = el;
      }
    });
  
    roman += max.r;
    num -= max.d;

  }
  
  return roman;
}
*/


function convertToRoman(num) {
  //special cases
  //5, 10, 50, 100, 500, 1000
  //V, X, L, C, D, M
  
  const romanNumerals = {
    1: { //single digits
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
    },
    2: { //tens
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC",
    },
    3: { //hundreds
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM",
    },
    4: { //thousands
      1: "M",
      2: "MM",
      3: "MMM",
    }
  }

  //console.log(num);
  let numLen = num.toString().length;

  if (numLen == 0) {
    return "";
  } else {
    let sigDigit = Math.floor(num / (10**(numLen-1)));
    let numeral = romanNumerals[numLen][sigDigit];
    //console.log(num);
    //console.log(numLen);
    //console.log(10**(numLen-1));
    //console.log(sigDigit);
    //console.log(numeral);
    //return numeral + convertToRoman(num.toString().slice(1))
    return sigDigit === 0 ? convertToRoman(num.toString().slice(1)) : numeral + convertToRoman(num.toString().slice(1))
  }
}


console.log(convertToRoman(1023));