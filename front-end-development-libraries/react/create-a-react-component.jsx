/*
Create a React Component

The other way to define a React component is with the ES6 class syntax.

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

Kitten class now has access to many useful React features
    such as local state 
    lifecycle hooks

Also notice the Kitten class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component.

It is best practice to call a component's constructor with super, and pass props to both.
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<div><h1>Hello React!</h1></div>);
    }
  };
/*
MyComponent is defined in the code editor using class syntax.

Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.
*/