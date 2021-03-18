/*
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
*/

function frankenSplice(arr1, arr2, n) {

  //console.log(arr1.slice(0));
  //console.log(...arr2);
  let tmp = arr2.slice(0);
  tmp.splice(n,0,...arr1);
  //console.log(tmp);
  return tmp;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));