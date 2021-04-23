/*
Combine Multiple Reducers

First principle of Redux: all app state is held in a single state object in the store.

Redux provides reducer composition

  solution for a complex state model.

  define multiple reducers to handle different pieces of your application's state

  compose these reducers together into one root reducer

  root reducer is then passed into the Redux createStore() method

In order to let us combine multiple reducers together, Redux provides the combineReducers() method.

  accepts an object as an argument
  
  object defines properties which associate keys to specific reducer functions

The name you give to the keys will be used for the associated piece of state.

Create a reducer for each piece of application state when they are unique in some way.

For example, in a note-taking app with user authentication

  one reducer could handle authentication

  another handles the text and notes that the user is submitting

const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});

Now, the key notes will contain all of the state associated with our notes and handled by our notesReducer.

This is how multiple reducers can be composed to manage more complex application state.

The state held in this Redux store

  a single object containing

  auth and notes properties
*/
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer  
});

const store = Redux.createStore(rootReducer);
/*
There are counterReducer() and authReducer() functions provided in the code editor.

Finish writing the rootReducer() function using the Redux.combineReducers() method.

Assign counterReducer to a key called count and authReducer to a key called auth.
*/