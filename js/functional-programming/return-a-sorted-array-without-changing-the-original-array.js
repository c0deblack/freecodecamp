var globalArray = [5, 6, 3, 2, 9];
/*
function nonMutatingSort(arr) {

  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });

}
*/

function nonMutatingSort(arr) {

  return arr.slice(0).sort((a,b) => {
    //return a === b ? 0 : a < b ? -1 : 1;
    return a - b;
  })


}
console.log(nonMutatingSort(globalArray));