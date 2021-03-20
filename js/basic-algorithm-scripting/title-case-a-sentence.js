/*
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}
*/

/*
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

*/
/*
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
*/

function titleCase(str) {
  const retStr = [];
  const words = str.split(" ");

  //console.log(words);
  for (let i = 0; i < words.length; i++) {
    retStr.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
  }
  return retStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
