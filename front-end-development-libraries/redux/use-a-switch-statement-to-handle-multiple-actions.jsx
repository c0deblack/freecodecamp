/*
Use a Switch Statement to Handle Multiple Actions

Redux store can handle multiple action types.

Requires

  a reducer function that accepts state and the action obj

  action creator (dispatch) functions that create action objects
  
  the action objects

Use a JavaScript switch statement.

The switch statement should

  switch over action.type
  
  return the appropriate authentication state

  have a default case that returns the current state

For each action

  you can return a new object

Multiple Reducers

  they are all run any time
 
  run when an action dispatch is made
*/
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  
  switch(action.type) {
    case 'LOGIN':   return {authentication: true};
    case 'LOGOUT':  return {authentication: false};
    default:        return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
/*
Fill in the reducer function to handle multiple authentication actions.
*/