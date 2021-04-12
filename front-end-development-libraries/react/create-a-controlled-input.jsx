/*
Create a Controlled Input

With React the user's input becomes part of the application state.

React controls the value of that input field.

When event methods are called, they receive an event object that contains a string of text from the input element.

You can access this string with event.target.value inside the method.
*/
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      
      
      this.handleChange = this.handleChange.bind(this);

    }
    
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
      return (
        <div>
          <input onChange={this.handleChange} value={this.state.input} />
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };
/*
First, create a method called handleChange() that has a parameter called event.

Update the input property of the component's state with the event objects value.

In the render method, create the input element above the h4 tag.

Add a value attribute which is equal to the input property of the component's state.

Then add an onChange() event handler set to the handleChange() method.

Add the necessary bindings in the constructor.
*/