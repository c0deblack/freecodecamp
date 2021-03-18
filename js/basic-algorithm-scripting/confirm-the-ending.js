/*
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}
*/

/*
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

*/

/*
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

*/

function confirmEnding(str, target) {
    const targetLen = target.length
    const strLen = str.length

    if (str.slice(str.length - target.length) == target) {
        return true
    } else {
        return false
    }
}

console.log(confirmEnding('Congratulation', 'on'))
