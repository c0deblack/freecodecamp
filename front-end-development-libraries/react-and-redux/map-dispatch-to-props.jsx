/*
Map Dispatch to Props

The mapDispatchToProps() function

  used to provide specific action creators to your React components

  similar in structure to the mapStateToProps() function

  returns an object that maps dispatch actions to property names,
  
    which become component props

  instead of returning a piece of state, each property returns a function

    function calls dispatch() with an action creator and any relevant action data

dispatch() is passed in to mapDispatchToProps()

React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps().

For example:

  you have a loginUser() action creator that takes a username

The object returned from mapDispatchToProps() for this action creator would look something like:

{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
*/
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(newMessage) {
      dispatch(addMessage(newMessage));
    }
  }
}
/*
The code editor provides an action creator called addMessage().

Write the function mapDispatchToProps() that takes dispatch as an argument, then returns an object.

The object should have a property submitNewMessage set to the dispatch function.

The function takes a parameter for the new message to add when it dispatches addMessage().
*/