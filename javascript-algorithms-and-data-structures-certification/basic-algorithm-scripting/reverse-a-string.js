
 /*
 function reverseString(str) {
  let arr = str.split("");
  let retArr = [];
  const lastIndex = arr.length - 1;
  for (let i = lastIndex; i >= 0 ; i--){
    retArr.push(arr.pop());
  }
  return retArr.join("");
 }
*/

/*
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
