/*
Dispatch an Action Event

dispatch method

  used to dispatch actions to the Redux store
  
  passing in an action creator function sends an action to the store
  
  dispatches an action object to the Redux store
  
The following lines are equivalent:

  store.dispatch(actionCreator());

  store.dispatch({ type: 'LOGIN' });
*/
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
/*
Dispatch the LOGIN action to the Redux store by calling the dispatch method.

Pass in the action created by loginAction().
*/