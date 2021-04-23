/*
Handle an Action in the Store

Reducer Function 

  responds to the action

  handle the state modifications that take place in response to actions

  takes state and action as arguments

  returns a new state

  no side effects

State is read-only.

Reducer must always return a new copy of state.
*/
const defaultState = { 
  // define a  state
  login: false
};

// define a reducer function to handle state changes
const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {
      login: true,
    };
  } else {
    return state;
  }

};

// create the redux store
const store = Redux.createStore(reducer);

// define an action dispact function
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// dispatch the dispatcher function
store.dispatch(loginAction());
/*
Return a state object with login set to true if

the reducer function receives an action of type 

'LOGIN'. 

Or return the current state.

Note: You can access the action's type directly

with action.type.
*/