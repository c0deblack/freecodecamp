/*
Use Middleware to Handle Asynchronous Actions

At some point you'll need to call asynchronous endpoints in your Redux app.

Redux Thunk middleware

  const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
  );
  
  designed to call asynchronous endpoints in your Redux app

To include Redux Thunk middleware
    
  you pass it as an argument to Redux.applyMiddleware()

    Redux.applyMiddleware(ReduxThunk.default)

  statement is then provided as a second parameter to the createStore() function

    const store = Redux.createStore(
      asyncDataReducer,
      Redux.applyMiddleware(ReduxThunk.default)
    );

To create an asynchronous action

  return a function in the action creator that takes 'dispatch' as an argument

  within this function, you can
  
    dispatch actions
    
    perform asynchronous requests

It's common to dispatch an action before initiating any asynchronous behavior.

  your application state knows that some data is being requested

In this example

  an asynchronous request is simulated with a setTimeout() call

  this state could display a loading icon, for instance

  once you receive the data, you dispatch another action which carries the data as a payload

Remember that you're passing dispatch() as a parameter to this special action creator.

Pass the action directly to dispatch() and the middleware takes care of the rest.
*/
// define a few actions
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

// call action creator functions
const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

// create async handler
const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data));

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
/*
Write both dispatches in the handleAsync() action creator.

Dispatch requestingData() before the setTimeout() (the simulated API call).

Then, after you receive the (pretend) data, dispatch the receivedData() action, passing in this data.

Now you know how to handle asynchronous actions in Redux. 

Everything else continues to behave as before.
*/