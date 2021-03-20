/*
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
*/
/*
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
*/

function truncateString(str, num) {
  if (str.length > num) {
    const re = new RegExp("^.{" + num + "}");
    return str.match(re)[0] + "...";
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
