/*
function steamrollArray(arr) {
  return arr.reduce(function(a, b) {
      return a.concat(Array.isArray(b) ? steamrollArray(b) : b );
  }, []);
}
*/

/*
function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}
*/

/*
function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
*/

/*
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
*/

/*
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
*/

/*
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}
*/

function steamrollArray(arr, retArr = []) {
    //recursively loop thru nest arrays
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].constructor == Array) {
            //console.log(arr[i])
            steamrollArray(arr[i], retArr)
        } else {
            //console.log(arr[i]);
            retArr.push(arr[i])
        }
    }
    return retArr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
