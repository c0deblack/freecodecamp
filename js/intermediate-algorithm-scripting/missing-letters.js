/*
function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}
*/

/*
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
*/

/*
function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function(letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}
*/

/*
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
*/

/*
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var len = str.length;
  var start = alphabet.indexOf(str[0]);
  
  for(var i = start; i < start + len; i++){
    if(!str.includes(alphabet[i])){
      return alphabet[i];
    }
  }
  return undefined;
}
*/

/*
function fearNotLetter(str) {
  for (var i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {
    if (str.indexOf(String.fromCharCode(i)) == -1) {return String.fromCharCode(i);}
  }
}
*/

/*
function fearNotLetter(str) {
  var missing;
  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length - 1);
  for(var i = first; i < last; i++){
    if(str.indexOf(String.fromCharCode(i)) < 0){
      missing = String.fromCharCode(i);
    }
  }
  return missing;
}
*/

function fearNotLetter(str) {
    //define the entire range of letters
    const FULL_RANGE = 'abcdefghijklmnopqrstuvwxyz'
    const SUBRANGE = FULL_RANGE.split('').splice(
        FULL_RANGE.indexOf(str.charAt(0)),
        FULL_RANGE.indexOf(str.slice(-1)) + 1
    )

    //console.log(SUBRANGE);

    const strArr = str.split('')
    for (let char of SUBRANGE) {
        if (strArr.indexOf(char) === -1) {
            return char
        }
    }
    return undefined
}

console.log(fearNotLetter('abce'))
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'))
