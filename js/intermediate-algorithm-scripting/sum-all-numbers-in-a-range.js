/*
function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}
*/

/*
function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}
*/

/*
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
*/

/*
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}
*/

function sumAll(arr) {
  const max = arr[arr.indexOf(Math.max(arr[0], arr[1]))];
  const min = arr[arr.indexOf(Math.min(arr[0], arr[1]))];

  //console.log("max val is:", max);
  //console.log("min val is:", min);

  let adder = min;
  let result = 0;

  //console.log("adder start val:", adder);
  //console.log("result start val:", result);

  while (adder <= max) {
    result += adder;  
    adder++;

    //console.log("adder:", adder);
   // console.log("result:", result);
  }
  return result;
}

sumAll([1, 4]);