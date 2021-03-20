/*
function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}
*/

/*
function dropElements(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
*/

/*
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
*/

/*

/*
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
*/



function dropElements(arr, func) {
  let i = 0;

  while (func(arr[i]) != true) {
    i++;
  }
  return arr.slice(i);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));