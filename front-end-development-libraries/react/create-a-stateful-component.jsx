/*
Create a Stateful Component

You create state in a React component by declaring a state property on the component class in its constructor. 

The state property must be set to a JavaScript object.

Declaring it looks like this:

    this.state = {

    }

You have access to the state object throughout the life of your component.

    you can update it

    render it in your UI

    pass it as props to child components

Note that you must create a class component by extending React.Component in order to create state like this.
*/
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: "c0deblack"};
        }
    
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
/*
There is a component in the code editor that is trying to render a name property from its state.

Initialize the component with state in the constructor and assign your name to a property of name.
*/