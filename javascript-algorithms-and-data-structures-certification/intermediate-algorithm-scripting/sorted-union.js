/*
//jshint esversion:6

function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}
*/

/*
function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
}
*/

/*
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}
*/

/*
function uniteUnique(arr1, arr2, arr3) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}
*/

/*
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}
*/

/*
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}
*/

/*
function uniteUnique(arr) {
  const numbers = [].concat(...arguments);
  return numbers.reduce(function(reducedNumbers, number){
  	if (!reducedNumbers.find(reducedNumber => { return reducedNumber === number; })) {
    	reducedNumbers.push(number);
    }
    return reducedNumbers;
  }, []);
}
*/

/*
function uniteUnique() {

  return (
    //Get all the arguments into an array
    Array.from(arguments)
    
    //Flatten the arrays within the array
    .reduce(function(a, b){ 
      return a.concat(b);}, [])
    
    //Filter out the duplicates
    .filter(function(val, i, arr){ 
      return arr.indexOf(val) == i;})
  )
}
*/

function uniteUnique(...arr) {
  var retArr = [];
  //create a new empty array
  console.log(arr);
  //flatten an array of arrays
  //use the Set object to get an array of unique values

  return Array.from(new Set(
    arr.reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue)
        },
        []
      )
  ))
  return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));