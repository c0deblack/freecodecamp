/*
Get State from the Redux Store

getState() method

  retrieve the current state held in the Redux store object
*/
const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState();
/*
Use store.getState() to retrieve the state from the store.

Assign this to a new variable currentState.
*/