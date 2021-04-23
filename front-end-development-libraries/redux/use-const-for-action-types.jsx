/*
Use const for Action Types

Assign action types as read-only constants,
*/
const defaultState = {
  authenticated: false
};

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT';

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
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

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
/*
Declare LOGIN and LOGOUT as const values.

Assign them to the strings 'LOGIN' and 'LOGOUT'.

Edit the authReducer() and the action creators to reference these constants.
*/