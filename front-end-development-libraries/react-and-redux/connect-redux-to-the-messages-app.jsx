/*
Connect Redux to the Messages App

Presentational components

  components that are not directly connected to Redux.

  responsible for the presentation of UI
  
Container components 

  are connected to Redux

  responsible for dispatching actions to the store

  often pass store state to child components as props
*/
// Redux:
const ADD = 'ADD';

// action creator that returns an action object
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

// reducer function interprets actions
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

// create the data store
const store = Redux.createStore(messageReducer);

// React:
// create a stateful component
class Presentational extends React.Component {
  constructor(props) {
    super(props);

    // define state
    this.state = {
      input: '',
      messages: []
    }

    // define event functions and bind 'this' to them
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // handle controlled input change
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  // handle for submit
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  // react render method
  render() {

    // react render - return
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:

// give redux store state to react props
const mapStateToProps = (state) => {
  return { messages: state }
};

// assign a redux dispatcher function to a react prop
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

// create a provider component
const Provider = ReactRedux.Provider;

// shortcut to react-redux connect function
const connect = ReactRedux.connect;

// define the ReactRedux Container component
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

// create a wrapper component for all other components
class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};
/*
Create a new const 'Container'.

Assign the component returned by ReactRedux.connect() to Container.

Pass the 'Presentational' component to ReactRedux.connect().

Render the React Redux Provider component within 'AppWrapper'

Pass Provider the Redux store as a prop and render Container as a child.

Once everything is setup, you will see the messages app rendered to the page again.
*/