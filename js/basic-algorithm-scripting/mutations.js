/*
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
*/

/*
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
*/

/*
function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}
*/

const mutation = (arr) => {
  const filter = arr[1]
    .toLowerCase()
    .split("")
    .filter((char) => {
      return !arr[0].toLowerCase().includes(char);
    });
  return !filter.length > 0;
};

const log = (output) => console.log(output);
log(mutation(["Mary", "Army"]));
