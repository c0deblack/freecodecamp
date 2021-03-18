
    /*
    function largestOfFour(arr) {
  const len = arr.length;
  const largest = [];
  let max = 0;

    let recurse = () => {
      log("starting recurse");

      if (arr[i].length == 1) {
        return arr[i][0];
      } else {
        let shifted = arr[i].shift();
        log("shifted number " + shifted);

        const internal = Math.max(shifted,recurse());
        log("internal max " + internal);
        return internal;
      }
    }
    largest.push(recurse());
    log("largest array is " + largest);
   return largest;
}

  */

  /*
  function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
*/

/*
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
*/
  /*
 function largestOfFour(arr) {
  const len = arr.length;
  const largest = [];
  let max = 0;

  for (let i = 0; i < len; i++) {
    const internalLen = arr[i].length;
    
    max = arr[i][0];
    for (let v = 0; v < internalLen; v++) {
      //log(arr[i]);
      max = Math.max(max, arr[i].shift());

      //log("max is " + max);
    }
    largest.push(max);

  }
  return largest;
}

  */

  /*
  function largestOfFour(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
  }
  */
 
 function largestOfFour(arr) {
  const len = arr.length;
  const largest = [];
  let max = 0;

    for (let i=0; i < len; i++) {
      largest.push(Math.max(...arr[i]));
    }

  return largest;
}

const log = output => console.log(output);

log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

