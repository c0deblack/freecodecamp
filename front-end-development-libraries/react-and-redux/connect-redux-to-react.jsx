/*
Connect Redux to React

Use The connect method from React Redux to:

  map state and dispatch to the props of one of your React components

Takes two optional arguments:

  mapStateToProps()
  
  mapDispatchToProps().

ReactRedux.connect()

  use the connect() method to connect this component to Redux

  call the connect() meethod immediately
  
  passing in the component to pass props into

  Example:

    const connect = ReactReduct.connect;

    connect(mapStateToProps, mapDispatchToProps)(MyComponent)

Note: If you want to omit one of the arguments to the connect method, you pass null in its place.
*/
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
/*
The code editor has:

  the mapStateToProps()

  mapDispatchToProps()

  component called Presentational
  
Use the connect() method to connect this component to Redux

Call the connect() meethod immediately, passing in the Presentational component.

Assign the result to a new const called ConnectedComponent that represents the connected component.
*/