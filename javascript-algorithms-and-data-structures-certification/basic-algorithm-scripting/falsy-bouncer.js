/*
function bouncer(arr) {
  return arr.filter(Boolean);
}
*/

function bouncer(arr) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      retArr.push(arr[i]);
    }
  }
  return retArr;
}

let arr2 = [7, "ate", "", false, 9];
console.log(bouncer(arr2));
console.log(arr2);