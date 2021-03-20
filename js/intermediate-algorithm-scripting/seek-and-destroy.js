/*
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
*/
/*
function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
*/
/*
function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
*/
/*
function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}
*/

function destroyer(arr) {
  //console.log(arguments);
  //console.log([...arguments].splice(0,3));

  const destroyNums = [...arguments].slice(1);
  return (
    [...arguments]
      .slice(0, 1)[0]
      //.filter((e) => {return (!ifDestroyNum(e, destroyNums))});
      .filter((e) => {
        return !destroyNums.includes(e);
      })
  );

  function ifDestroyNum(numToCheck, numsToDestroy) {
    // must check if numToCheck is == to any of the
    // non array arguments passed to the
    // destroyer function.
    //
    // return true if we will destroy numToCheck

    //console.log(arguments);
    //console.log(typeof numToCheck);
    console.log(numToCheck);
    //console.log(numsToDestroy);
    console.log(numsToDestroy.includes(numToCheck));
    return numsToDestroy.includes(numToCheck);
  }
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
