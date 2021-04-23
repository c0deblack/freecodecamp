/*
Create a Redux Store

Redux

  state management framework

  used with a number of different web technologies

  single state object housed in the Redux store

  single source of truth within the application

Redux Store

  object which holds and manages application state

  create the with createStore() on the Redux object

  a reducer function is the required argument of createStore()

    has state as an argument
    
    returns state

// Redux methods are available from a Redux object
// For example: Redux.createStore()
*/
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer)
/*
Declare a store variable and assign it to the createStore() method.

Pass in the reducer as an argument.
*/