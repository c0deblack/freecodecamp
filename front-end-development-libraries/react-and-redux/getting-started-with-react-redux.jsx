/*
Getting Started with React Redux

React

  a view library that you provide with data, then it renders the view in an efficient, predictable way

Redux

  a state management framework that you can use to simplify the management of your application's state

React Redux

  create a single Redux store that manages the state of your entire app

  react components get the pieces of data in the store that are relevant to their role

  dispatch actions directly from React components, which then trigger store updates

  needs to use the react-redux package

    provides mechanism to pass Redux state and dispatch to your React components as props
*/
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }

  render() {
    return <div />
  }
};
/*
Start with a DisplayMessages component.

Add a constructor to this component and initialize it with a state that has two properties:

  input, that's set to an empty string
  
  messages, that's set to an empty array
*/