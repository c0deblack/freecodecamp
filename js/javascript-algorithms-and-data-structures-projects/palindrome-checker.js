/*
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}
*/

/*
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}
*/

/*function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;
}
*/

function palindrome(str) {
  //parse str
  const reverseStr = function (s, a = []) {
    for (let i = 0; i < s.length; i++) {
      //console.log(i);
      a.unshift(s.charAt(i));
    }
    //console.log(a);
    return a.join("");
  }

  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  //console.log(reverseStr(str));
  return (str === reverseStr(str).toLowerCase()) ? true : false;
}

console.log(palindrome("eye"));
console.log(palindrome("1 eye for of 1 eye."))