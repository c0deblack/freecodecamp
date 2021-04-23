/*
Register a Store Listener

Redux store object is store.subscribe() method

  allows you to subscribe listener functions to the store

  called whenever an action is dispatched against the store
*/
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

function callback() {
  count++;
}

store.subscribe(callback);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
/*
Write a callback function that increments the global variable count every

time the store receives an action, and pass this function in to the store.subscribe() method.
*/