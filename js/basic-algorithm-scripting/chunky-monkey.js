/*
function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
*/

/*
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
*/

/*
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
*/

/*
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
*/

function chunkArrayInGroups(arr, size) {
  const retArr = [];

  let loops = arr.length / size;

  do {
    log(loops, "loops starting val");

    retArr.push(arr.splice(0, size));
    log(retArr, "return array so far..");

    loops--;
    log(loops, "loops ending val");
  } while (loops > 0);

  return retArr;
}

const log = (output, str = "") => console.log(str + " " + output);

log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), "Final output:");

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
