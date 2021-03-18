/*
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
*/

/*
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
*/


function repeatStringNumTimes(str, num) {
    //console.log("string is " + str);
    //console.log("num is " + num);

  return (num < 1) ?  ''
        : str + repeatStringNumTimes(str, num - 1);

 /*   
  if (num <= 1){
    return str;
  } else {
    console.log("recursion starts");
    return str + repeatStringNumTimes(str, num - 1); 
  }
  */
}

console.log(repeatStringNumTimes("abc|", 7));