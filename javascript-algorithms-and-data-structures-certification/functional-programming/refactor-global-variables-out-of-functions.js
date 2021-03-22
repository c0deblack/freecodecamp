// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


/*
function add(list, bookName) {
  return [...list, bookName];
}

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}
*/

/*
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}
*/

function add(bookArr, bookName) {
  return bookArr.join("~").concat("~", bookName).split("~");
}


function remove(bookArr, bookName) {
  const book_index = bookArr.indexOf(bookName);
  if (book_index >= 0) {
    return ((arr = bookArr.slice(0), dex = book_index) => {arr.splice(dex, 1); return arr;})();    
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');


console.log(bookList);