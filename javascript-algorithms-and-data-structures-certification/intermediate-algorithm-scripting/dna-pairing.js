/*
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}
*/

/*
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}
*/
function pairElement(str) {

  const BASE_PAIRS = { 
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  
  let retArray = [];

  //loop through each character of the string
  for (var x = 0; x < str.length; x++)
  {
      let base = str.charAt(x);

      retArray.push([base, BASE_PAIRS[base]])
  }
  console.log(retArray);
  return retArray;
}

pairElement("GCG");
pairElement("ATCGA")