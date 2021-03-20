// The global variable
var s = [23, 65, 98, 5];

/*
Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
*/

/*
Array.prototype.myMap = function(callback) {
  var newArray = [];


  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }


  return newArray;
};
*/

Array.prototype.myMap = function (callback) {
  var newArray = [];

  this.forEach((element) => {
    newArray.push(callback(element));
  });

  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
