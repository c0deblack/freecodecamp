/*
Use Provider to Connect Redux to React

Provide React access to the Redux store and actions.

React Redux provides its react-redux package.

  has a small API with two key features: Provider and connect.

The Provider is a wrapper component from React Redux that wraps your React app.

  allows you to access the Redux store and dispatch functions

  takes two props, the Redux store and the child component(s)

Defining the Provider:

  <Provider store={store}>
    <App/>
  </Provider>
*/
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

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



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
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
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider>
        <DisplayMessages />
      </Provider>
    )
  }
};
/*
Use this top level component to render the Provider from ReactRedux, and pass the Redux store as a prop.

Then render the DisplayMessages component as a child.
*/