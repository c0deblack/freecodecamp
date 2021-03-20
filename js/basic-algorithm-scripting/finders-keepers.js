function findElement(arr, func) {
  console.log("starting");
  console.log(func(arr[0]));
  console.log(!func(arr[0]));
  console.log(arr.length);
  let condition = arr.length && !func(arr[0]);
  return condition
    ? findElement(arr.slice(1), func)
    : (() => {
        console.log(arr[0]);
        return arr[0];
      })();
}
/*
function findElement(arr, func) {
  return arr.find(func);
}
*/

/*
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
*/
/*
function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}
*/

/*
function findElement(arr, func) {

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    //console.log(func(arr[i]));

    if (func(arr[i]) == true) {
      return arr[i];
    }
  }
  return undefined;
}
*/
console.log(
  findElement([1, 43, 57, 55, 67, 33, 29, 2, 3, 4], (num) => num % 2 === 0)
);
