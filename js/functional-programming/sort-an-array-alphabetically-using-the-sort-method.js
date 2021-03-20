/*
function alphabeticalOrder(arr) {

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

}
*/

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => {
    if (a === b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
  });
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
