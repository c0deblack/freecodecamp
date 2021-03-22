/*
function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}
*/

/*
function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}
*/

/*
function rot13(str) {
  str.toUpperCase(); // Convert `str` string to uppercase letters
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arr = str.split(""); // Splits `str` into an array where each element is an individual character (including non-alphabetic characters)

    for (var i = 0; i < arr.length; i++) { // Iterate number of `arr` elements
      for (var j = 0; j < abc.length; j++) { // Iterate number of `abc`/`nop` array elements
      if (arr[i] === abc[j]) {
        arr[i] = nop[j]; // Swap the `arr` character for the corresponding `nop` array character
      } else if (arr[i] === nop[j]) {
        arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
      }
    }
  }

  return arr.join(""); // Join all `arr` array characters back into a string, returning the deciphered `str` with all non-alphabetical characters preserved
}
*/

/*
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}
*/

/*
function rot13(str) {
  // Split str into a character array
  return (
    str
      .split("")
      // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        var x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoin the array into a string
}
*/

function rot13(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

  return str.replace(/\w+/g, (encryptedWord) => {
    //console.log(encryptedWord);
    return encryptedWord
      .split("")
      .map((encryptedChar) => {
        //console.log(encryptedChar);
        //console.log(encryptedChar.charCodeAt(0))
        let decryptedCharIndex = alphabet.indexOf(encryptedChar) - 13;
        console.log(decryptedCharIndex);
        return decryptedCharIndex === -1 
          //alphabet.slice(-1, 0) didnt work, work around
          ? alphabet.slice(-1)
          : alphabet.slice(decryptedCharIndex, decryptedCharIndex + 1)
      }).join("")
  });
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));