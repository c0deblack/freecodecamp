/*
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}
*/

/*
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let len = arr.length;
  let smallerCount = 0;
  for (let i = 0; i < len; i++) {
    if (num > arr[i]) {
      smallerCount++;
    }
  } // counts how many array numbers are smaller than num
  return smallerCount; // the above equals num's position in a sorted array
}
*/

/*
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let i = 0;
  while (num > arr[i]) {
    i++;
  }

  return i;
}
*/

/*
function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}
*/

/*
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

*/

/*
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
*/

function getIndexToIns(arr, num) {

  const sorted = arr.sort((a, b) => { 
    if (a < b){return -1;}
    if (a > b){return 1;}
    if (a === b){return 0;}
    });
    const len = arr.length;

    log(sorted);
    log(len);
    for (let i = 0; i < len; i++) {
      if (sorted[i] >= num) {
        return i;
      }
    }
    return len;
}

const log = output => console.log(output);

console.log(getIndexToIns([5, 3, 20, 3], 5));