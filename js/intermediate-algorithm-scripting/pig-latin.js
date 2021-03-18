/*
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
*/

/*
function translatePigLatin(str) {
  return str.replace(/(^[^aeiou]*)(\w*)/, function(match, p1, p2){
    return p2 + (p1 ? p1 : 'w') + 'ay';
  })
}
*/

/*
function translatePigLatin(str) {
  var firstVowelIndex = str.search(/[aeiou]/);
  return str.slice(firstVowelIndex) + (firstVowelIndex == 0 ? "way" : str.slice(0, firstVowelIndex) + "ay");
}

translatePigLatin("consonant");
*/

/*
function translatePigLatin(str) {
  return str.match(/^[aeiou]+/) ? 
    str + "way" : 
    str.replace(/^(\w+?)(?=[aeiou])(.*)/, "$2$1ay");
}
translatePigLatin("glove");
*/

/*
function translatePigLatin(str) {
var vowelIndex = str.match('[aeiou]').index;
return (vowelIndex === 0 )?   str.concat('way'):str.substring(vowelIndex).concat(str.substring(0,vowelIndex)).concat('ay');
}
*/

/*
var vowels = /[aeiou]/gi;

//check if the first character is a vowel & add the string 'way' to it
if(str.charAt(0).match(vowels)){
	return str + 'way';
} 

//extract the first consonants from the string, and create a piglatin  
var con = str.substr(0, str.search(vowels));
var otherStr = str.substr(str.search(vowels));
return otherStr + con +'ay';	
*/

/*
function translatePigLatin(str) {
  if(str.match(/^[aeiou]/)){  //starts with vowel
    return str.replace(/(.+)/,"$1way");
  }else if(str.match(/[aeiou]/g)){ //starts with consonant or consonant cluster
    return str.replace(/(^[^aeiou]+)(.+)/g,"$2$1ay");
  }else{ //all consonants 
    return str + "ay";
  }
}
*/

/*
function translatePigLatin(str) {
var vow = ['a','e','i','o','u'];
if(vow.indexOf(str.charAt(0)) !== -1){
  str += "w";
}
while(vow.indexOf(str.charAt(0)) == -1){
  str = str.substr(1) + str.charAt(0);
}
return str += "ay";
}
//test here
translatePigLatin("california");
*/

/*
function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var str1 = "";
  
  if(vowels.indexOf(str.charAt(0)) !== -1 && str.charAt(0) !== "y") {
    str1 += str + "way";
  } else if(str.charAt(0) === "y") {
    str1 += str.slice(1) + "yay";
  } else {
    for(var i = 0; i < str.length; i++) {
      if(vowels.indexOf(str.charAt(i)) !== -1) {
        return str1 += str.slice(i) + str.slice(0, i) + "ay";
      }
    }
  }
  str = str1;
  return str;
*/

/*
function translatePigLatin(str) {
  return str.match(/^([^aeiou]+)/) ? str.replace(/^([^aeiou]+)(\w+)/, "$2$1ay") : str + "way";
}

translatePigLatin("california");
*/

/*
function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}
*/

//
//function translatePigLatin(str) {
//  return str
//    .replace(/^[aeiou]\w*/, "$&way")
//    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
//}
//
// test here
//translatePigLatin("consonant");
//

/*
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");
*/

/*
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}
*/

function translatePigLatin(str) {
    if (/^[aeiou]/.test(str[0])) {
        return str.concat('way')
    } else {
        const STRING_ARRAY = str.split('')
        const MAX_I = str.length
        let keepGoing = true
        let i = 0

        //console.log(MAX_I);

        do {
            //console.log(i);
            let isConsonantAtStart = /[^aeiou]/.test(STRING_ARRAY[0])

            if ((isConsonantAtStart == true) & (i < MAX_I)) {
                STRING_ARRAY.push(STRING_ARRAY.shift())
                //console.log(STRING_ARRAY);
            } else {
                keepGoing = false
            }

            i++
        } while (keepGoing == true)
        return STRING_ARRAY.join('').concat('ay')
    }
}

console.log(translatePigLatin('rhythm'))
console.log(translatePigLatin('schwartz'))
console.log(translatePigLatin('eight'))
console.log(translatePigLatin('california'))
console.log(translatePigLatin('paragraphs'))
console.log(translatePigLatin('glove'))
console.log(translatePigLatin('algorithm'))
console.log(translatePigLatin('dynamic'))
