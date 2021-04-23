/*
Use the Spread Operator on Arrays

Can be used multiple times.

Only makes a shallow copy of the array.

Provides immutable array operations for one-dimensional arrays.

If you have an array myArray and write:

  let newArray = [...myArray];

newArray is now a clone of myArray.

To clone an array but add additional values in the new array:

  let newArray = [...myArray, 'new value'].

Returns a new array composed of the values in myArray and the string new value as the last value.
*/
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
/*
Use the spread operator to return a new copy of state when a to-do is added.
*/