/*
  function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}
*/
/*
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
*/

/*
function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}
*/

function findLongestWordLength(str) {
  const split = str.split(" ");
  let longestStr = 0;

  for (let i = 0; i < split.length; i++) {
    //console.log(split[i]);

    let len = split[i].length;
    //console.log(len);

    if (len > longestStr) {
      longestStr = len;
    }
  }
  return longestStr;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
