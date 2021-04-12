/*
Bind 'this' to a Class Method

A class method typically needs to use the this keyword.

Explicitly bind this in the constructor.

    This.handleClick = this.handleClick.bind(this).

    Calling this.setState() within your class method sets the component instance state.
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      
      this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>

          <button onClick={this.handleClick}>Click Me</button>

          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };
/*
The code editor has a component with a state that keeps track of the text.

Fix it by explicitly binding this to the handleClick() method in the component's constructor.

Next, add a click handler to the button element in the render method.

It should trigger the handleClick() method when the button receives a click event.

Remember that the method you pass to the onClick handler needs curly braces.
*/