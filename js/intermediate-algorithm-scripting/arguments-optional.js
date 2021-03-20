/*
//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}
*/

/*
function addTogether() {
  const [first, second] = Object.values(arguments);
  // Check first argument
  if (typeof first !== "number") {
    return undefined;
  }

  // Function to add second argument
  const addSecond = (second) => typeof second === "number" ? first + second : undefined;

  console.log("addSecond: ", addSecond)
  // Check second argument
  if (second !== undefined) {
    return addSecond(second);
  } else {
    return addSecond
  }
}
*/

/*
function addTogether() {
  // Function to check if a number is actually a number
  function checkNum(num) {
    return (typeof num === "number");
  };

  if (arguments.length === 2) {
    // Check if we have two arguments and if they are numbers
    // Return the sum if they are both numbers
    let first = arguments[0];
    let second = arguments[1];
    if (checkNum(first) && checkNum(second)) {
      return first + second;
    } else {
      return undefined;
    }
  } else if (arguments.length === 1) {
    // If only one argument was found, return a new function
    let first = arguments[0];
    if (checkNum(first)) {
      // Return function that expect a second argument.
      function addSecond(second) {
        // Check if the new argument is a number
        if (checkNum(second)) {
          return first + second;
        } else {
          return undefined;
        }
      };
      return addSecond;
    } else {
      return undefined;
    }
  } else {
    // Incorrect number of arguments found
    return undefined;
  }
}
*/

/*
function addTogether(a, b) {
  // only if valid number provided
  if (Number.isFinite(a)) {
    if (!b) {
      return function(c) {
        if (Number.isFinite(c)) {
          return a + c;
        }
      };
    }
    else if (Number.isFinite(b)) {
      return a + b;
    }
  }
  // returns undefined by default
}
*/

/*

function addTogether() {
  var len = arguments.length;
  var a = arguments[0];
  var b = arguments[1];
  var isNum = function(arg) { return Number.isFinite(arg); };
  if (len === 1 && isNum(a)) {
    return function(x) {
      if (isNum(x)) {
        return a + x;
      }
    };
  }
  else if (len === 2 && isNum(a) && isNum(b)) {
    return a + b;
  }
}
*/

function addTogether(...args) {
  if (!args.every((arg) => typeof arg == "number")) {
    return undefined;
  }

  if (args.length > 1) {
    return args[0] + args[1];
  } else {
    return (numToAdd) => {
      //console.log(numToAdd);
      //console.log(typeof(numToAdd));
      if (typeof numToAdd == "number") {
        return args[0] + numToAdd;
      } else {
        return undefined;
      }
    };
  }
}

console.log(addTogether(2, 3));

let test = addTogether(2);

console.log(test(3));

console.log(addTogether(3, [2]));

console.log(addTogether(3)([2]));
