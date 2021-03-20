/*
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
*/

/*
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
*/

function urlSlug(title) {
  return title
    .toLowerCase()
    .split(" ")
    .filter((word) => word.length > 0)
    .join("-");
}

console.log(urlSlug(" Winter Is  Coming"));
