/*
.--------------------------------------------.
| COUNT THE NUMBER OF OCCURANCES IN AN ARRAY |
'--------------------------------------------'
https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements#5668029

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5], counts[2], counts[9], counts[4]);

console.log(counts[5]); // logs '3'

// If you want to get an array of members, just use the keys() functions

keys(counts); // returns ["5", "2", "9", "4"]
*/

/*
var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }

  return acc;
}, {});

// a == {2: 5, 4: 1, 5: 3, 9: 1}
*/

/*
// One line ES6 solution. So many answers using object as a map but I can't see anyone using an actual Map

const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

// Use map.keys() to get unique elements

// Use map.values() to get the occurrences

// Use map.entries() to get the pairs [element, frequency]

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]

const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

console.info([...map.keys()])
console.info([...map.values()])
console.info([...map.entries()])
*/

/*
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
*/
/*
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
*/
/*
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}
*/

function diffArray(arr1, arr2) {
    var newArr = []

    // combine both arrays

    // count the number of occurances of
    // each element

    const array = arr1.concat(arr2)

    //console.log(array);
    const map = array.reduce((acc, e) => {
        acc.set(e, (acc.get(e) || 0) + 1)
        //console.log(acc.get(e));
        return acc
    }, new Map())

    //console.log([...map.keys()]);
    //console.log([...map.values()]);
    //console.log([...map.entries()]);

    // filter for elements that occur one time
    for (let [key, value] of map) {
        if (value === 1) {
            newArr.push(key)
        }
    }

    console.log(newArr)
    return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
