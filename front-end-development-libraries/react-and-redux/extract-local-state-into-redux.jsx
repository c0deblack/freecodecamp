/*
Extract Local State into Redux
*/
// Redux:

// action name constant
const ADD = 'ADD';

// action creator
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

// redux reducer function
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

// the redux store
const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {

    // use the 'prop' version of messages that comes from redux
    // also use a local state for input in this example
    this.setState({
      input: ''
    });

    // this dispatches the local state input to the redux store
    // this function uses the action creator defined in redux
    this.props.submitNewMessage(this.state.input);

  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          
          {/* map over the messages stored in the redux store */ }
          {this.props.messages.map( (message, idx) => {
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

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
/*
Presentational component 

  remove the messages property in the local state

  modify the submitMessage() method so that it dispatches submitNewMessage() from this.props

  pass in the current input message from local state as an argument

  remove the messages property from the call to this.setState() here as well.

  modify the render() method so that it maps over the messages received from props rather than state
*/