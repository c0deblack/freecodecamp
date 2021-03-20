/*
function checkPositive(arr) {

  return arr.every(function(value) {
    return value > 0;
  });

}
*/

function checkPositive(arr) {
  return arr.every((val) => val >= 0);
}
checkPositive([1, 2, 3, -4, 5]);
